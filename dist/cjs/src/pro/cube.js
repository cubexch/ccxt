'use strict';

var cube$1 = require('../cube.js');
var errors = require('../base/errors.js');
var market_data = require('../static_dependencies/cube-proto-lib/market_data.js');
var sha256 = require('../static_dependencies/noble-hashes/sha256.js');
var time = require('../base/functions/time.js');

//  ---------------------------------------------------------------------------
//  ---------------------------------------------------------------------------
class cube extends cube$1 {
    describe() {
        return this.deepExtend(super.describe(), {
            'has': {
                'ws': true,
                'watchBalance': false,
                'watchMyTrades': true,
                'watchOHLCV': true,
                'watchOrderBook': true,
                'watchOrders': true,
                'watchTicker': true,
                'watchTickers': false,
                'watchTrades': true,
                'watchPosition': false,
            },
            'urls': {
                'api': {
                    'ws': {
                        'trade': 'wss://api.cube.exchange/os',
                        // wss://api.cube.exchange/md/book/:marketid
                        'marketData': 'wss://api.cube.exchange/md/book/',
                    },
                },
                'test': {
                    'ws': {
                        'trade': 'wss://dev.cube.exchange/os',
                        // wss://dev.cube.exchange/md/book/:marketid
                        'marketData': 'wss://dev.cube.exchange/md/book/',
                    },
                },
            },
            'options': {},
            'streaming': {},
            'exceptions': {
                'ws': {
                    'exact': {},
                },
            },
        });
    }
    onConnected(client, message = undefined) {
        // for user hooks
        // ---
        // send heartbeat every 29 seconds to keep ws alive
        const intervalMs = 29000;
        while (client.isConnected) {
            const { MdMessage, Heartbeat } = market_data.md;
            // define heartbeat prior to mdMessage instantiation to avoid python error
            // ruff returns Unexpected Token 'Heartbeat' when done inline
            const hb = new Heartbeat({
                // random number between 1 and 100k, server will respond w it upon receipt
                'requestId': Math.floor((Math.random() * 100000) + 1),
                // current unix timestamp
                'timestamp': Date.now() / 1000,
            });
            const heartbeatMessage = new MdMessage({
                'heartbeat': hb,
            });
            client.send(heartbeatMessage.serializeBinary());
            time.sleep(intervalMs);
        }
    }
    getCurrentUnixEpoch() {
        const now = Date.now();
        const secondsSinceEpoch = Math.floor(now / 1000);
        return BigInt(secondsSinceEpoch);
    }
    toLittleEndian64BitNumber(n) {
        const lower32Bits = n % BigInt(2 ** 32);
        const upper32Bits = (n - lower32Bits) / BigInt(2 ** 32);
        return lower32Bits + (upper32Bits * BigInt(2 ** 32));
    }
    async authenticate(url, params = {}) {
        this.checkRequiredCredentials();
        const accessKeyId = this.apiKey;
        const timestamp = this.toLittleEndian64BitNumber(this.getCurrentUnixEpoch());
        let msg = 'cube.xyz';
        msg = msg + timestamp.toString;
        const messageHash = this.hmac(this.encode(msg), this.encode(this.secret), sha256.sha256);
        const client = this.client(url);
        const future = client.future(messageHash);
        const authenticated = this.safeValue(client.subscriptions, messageHash);
        if (authenticated === undefined) {
            const request = {
                accessKeyId,
                messageHash,
                timestamp,
            };
            this.watch(url, messageHash, request, messageHash, future);
        }
        return future;
    }
    handleErrorMessage(client, message) {
        //
        //    {
        //        T: 'error',
        //        code: 400,
        //        msg: 'invalid syntax'
        //    }
        //
        const code = this.safeString(message, 'code');
        const msg = this.safeValue(message, 'msg', {});
        throw new errors.ExchangeError(this.id + ' code: ' + code + ' message: ' + msg);
    }
    handleConnected(client, message) {
        //
        //    {
        //        T: 'success',
        //        msg: 'connected'
        //    }
        //
        return message;
    }
    handleMarketDataMessage(client, message) {
        for (let i = 0; i < message.length; i++) {
            const data = message[i];
            const T = this.safeString(data, 'T');
            const msg = this.safeValue(data, 'msg', {});
            if (T === 'subscription') {
                return this.handleSubscription(client, data);
            }
            if (T === 'success' && msg === 'connected') {
                return this.handleConnected(client, data);
            }
            if (T === 'success' && msg === 'authenticated') {
                return this.handleAuthenticate(client, data);
            }
            const methods = {
                'error': this.handleErrorMessage,
                // 'b': this.handleOHLCV,
                // 'q': this.handleTicker,
                // 't': this.handleTrades,
                // 'o': this.handleOrderBook,
            };
            const method = this.safeValue(methods, T);
            if (method !== undefined) {
                method.call(this, client, data);
            }
        }
    }
    handleTradeMessage(client, message) {
        const stream = this.safeString(message, 'stream');
        const methods = {
            'authorization': this.handleAuthenticate,
            'listening': this.handleSubscription,
            // 'trade_updates': this.handleTradeUpdate,
        };
        const method = this.safeValue(methods, stream);
        if (method !== undefined) {
            method.call(this, client, message);
        }
    }
    handleMessage(client, message) {
        if (Array.isArray(message)) {
            return this.handleMarketDataMessage(client, message);
        }
        this.handleTradeMessage(client, message);
    }
    handleAuthenticate(client, message) {
        //
        // crypto
        //    {
        //        T: 'success',
        //        msg: 'connected'
        //    ]
        //
        // trading
        //    {
        //        "stream": "authorization",
        //        "data": {
        //            "status": "authorized",
        //            "action": "authenticate"
        //        }
        //    }
        // error
        //    {
        //        stream: 'authorization',
        //        data: {
        //            action: 'authenticate',
        //            message: 'access key verification failed',
        //            status: 'unauthorized'
        //        }
        //    }
        //
        const T = this.safeString(message, 'T');
        const data = this.safeValue(message, 'data', {});
        const status = this.safeString(data, 'status');
        if (T === 'success' || status === 'authorized') {
            const promise = client.futures['authenticated'];
            promise.resolve(message);
            return;
        }
        throw new errors.AuthenticationError(this.id + ' failed to authenticate.');
    }
    handleSubscription(client, message) {
        return message;
    }
}

module.exports = cube;
