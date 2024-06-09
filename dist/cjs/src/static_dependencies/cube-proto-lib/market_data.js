'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pb_1 = require('google-protobuf');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var pb_1__namespace = /*#__PURE__*/_interopNamespace(pb_1);

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
exports.md = void 0;
(function (md) {
    var _MdMessage_one_of_decls, _MarketByPrice_one_of_decls, _MarketByPriceDiff_one_of_decls, _MarketByOrder_one_of_decls, _MarketByOrderDiff_one_of_decls, _Trades_one_of_decls, _Summary_one_of_decls, _Kline_one_of_decls, _Heartbeat_one_of_decls, _MdMessages_one_of_decls, _AggMessage_one_of_decls, _TopOfBook_one_of_decls, _TopOfBooks_one_of_decls, _RateUpdate_one_of_decls, _RateUpdates_one_of_decls, _ClientMessage_one_of_decls, _Config_one_of_decls;
    let Side;
    (function (Side) {
        Side[Side["BID"] = 0] = "BID";
        Side[Side["ASK"] = 1] = "ASK";
    })(Side = md.Side || (md.Side = {}));
    let KlineInterval;
    (function (KlineInterval) {
        KlineInterval[KlineInterval["S1"] = 0] = "S1";
        KlineInterval[KlineInterval["M1"] = 1] = "M1";
        KlineInterval[KlineInterval["M15"] = 2] = "M15";
        KlineInterval[KlineInterval["H1"] = 3] = "H1";
        KlineInterval[KlineInterval["H4"] = 4] = "H4";
        KlineInterval[KlineInterval["D1"] = 5] = "D1";
    })(KlineInterval = md.KlineInterval || (md.KlineInterval = {}));
    let RateUpdateSide;
    (function (RateUpdateSide) {
        RateUpdateSide[RateUpdateSide["BASE"] = 0] = "BASE";
        RateUpdateSide[RateUpdateSide["QUOTE"] = 1] = "QUOTE";
    })(RateUpdateSide = md.RateUpdateSide || (md.RateUpdateSide = {}));
    class MdMessage extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MdMessage_one_of_decls.set(this, [[1, 2, 3, 4, 5, 6, 7, 8]]);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("heartbeat" in data && data.heartbeat != undefined) {
                    this.heartbeat = data.heartbeat;
                }
                if ("summary" in data && data.summary != undefined) {
                    this.summary = data.summary;
                }
                if ("trades" in data && data.trades != undefined) {
                    this.trades = data.trades;
                }
                if ("mboSnapshot" in data && data.mboSnapshot != undefined) {
                    this.mboSnapshot = data.mboSnapshot;
                }
                if ("mboDiff" in data && data.mboDiff != undefined) {
                    this.mboDiff = data.mboDiff;
                }
                if ("mbpSnapshot" in data && data.mbpSnapshot != undefined) {
                    this.mbpSnapshot = data.mbpSnapshot;
                }
                if ("mbpDiff" in data && data.mbpDiff != undefined) {
                    this.mbpDiff = data.mbpDiff;
                }
                if ("kline" in data && data.kline != undefined) {
                    this.kline = data.kline;
                }
            }
        }
        get heartbeat() {
            return pb_1__namespace.Message.getWrapperField(this, Heartbeat, 1);
        }
        set heartbeat(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 1, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_heartbeat() {
            return pb_1__namespace.Message.getField(this, 1) != null;
        }
        get summary() {
            return pb_1__namespace.Message.getWrapperField(this, Summary, 2);
        }
        set summary(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 2, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_summary() {
            return pb_1__namespace.Message.getField(this, 2) != null;
        }
        get trades() {
            return pb_1__namespace.Message.getWrapperField(this, Trades, 3);
        }
        set trades(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 3, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_trades() {
            return pb_1__namespace.Message.getField(this, 3) != null;
        }
        get mboSnapshot() {
            return pb_1__namespace.Message.getWrapperField(this, MarketByOrder, 4);
        }
        set mboSnapshot(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 4, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_mboSnapshot() {
            return pb_1__namespace.Message.getField(this, 4) != null;
        }
        get mboDiff() {
            return pb_1__namespace.Message.getWrapperField(this, MarketByOrderDiff, 5);
        }
        set mboDiff(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 5, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_mboDiff() {
            return pb_1__namespace.Message.getField(this, 5) != null;
        }
        get mbpSnapshot() {
            return pb_1__namespace.Message.getWrapperField(this, MarketByPrice, 6);
        }
        set mbpSnapshot(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 6, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_mbpSnapshot() {
            return pb_1__namespace.Message.getField(this, 6) != null;
        }
        get mbpDiff() {
            return pb_1__namespace.Message.getWrapperField(this, MarketByPriceDiff, 7);
        }
        set mbpDiff(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 7, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_mbpDiff() {
            return pb_1__namespace.Message.getField(this, 7) != null;
        }
        get kline() {
            return pb_1__namespace.Message.getWrapperField(this, Kline, 8);
        }
        set kline(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 8, __classPrivateFieldGet(this, _MdMessage_one_of_decls, "f")[0], value);
        }
        get has_kline() {
            return pb_1__namespace.Message.getField(this, 8) != null;
        }
        get inner() {
            const cases = {
                0: "none",
                1: "heartbeat",
                2: "summary",
                3: "trades",
                4: "mboSnapshot",
                5: "mboDiff",
                6: "mbpSnapshot",
                7: "mbpDiff",
                8: "kline"
            };
            return cases[pb_1__namespace.Message.computeOneofCase(this, [1, 2, 3, 4, 5, 6, 7, 8])];
        }
        static fromObject(data) {
            const message = new MdMessage({});
            if (data.heartbeat != null) {
                message.heartbeat = Heartbeat.fromObject(data.heartbeat);
            }
            if (data.summary != null) {
                message.summary = Summary.fromObject(data.summary);
            }
            if (data.trades != null) {
                message.trades = Trades.fromObject(data.trades);
            }
            if (data.mboSnapshot != null) {
                message.mboSnapshot = MarketByOrder.fromObject(data.mboSnapshot);
            }
            if (data.mboDiff != null) {
                message.mboDiff = MarketByOrderDiff.fromObject(data.mboDiff);
            }
            if (data.mbpSnapshot != null) {
                message.mbpSnapshot = MarketByPrice.fromObject(data.mbpSnapshot);
            }
            if (data.mbpDiff != null) {
                message.mbpDiff = MarketByPriceDiff.fromObject(data.mbpDiff);
            }
            if (data.kline != null) {
                message.kline = Kline.fromObject(data.kline);
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.heartbeat != null) {
                data.heartbeat = this.heartbeat.toObject();
            }
            if (this.summary != null) {
                data.summary = this.summary.toObject();
            }
            if (this.trades != null) {
                data.trades = this.trades.toObject();
            }
            if (this.mboSnapshot != null) {
                data.mboSnapshot = this.mboSnapshot.toObject();
            }
            if (this.mboDiff != null) {
                data.mboDiff = this.mboDiff.toObject();
            }
            if (this.mbpSnapshot != null) {
                data.mbpSnapshot = this.mbpSnapshot.toObject();
            }
            if (this.mbpDiff != null) {
                data.mbpDiff = this.mbpDiff.toObject();
            }
            if (this.kline != null) {
                data.kline = this.kline.toObject();
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.has_heartbeat)
                writer.writeMessage(1, this.heartbeat, () => this.heartbeat.serialize(writer));
            if (this.has_summary)
                writer.writeMessage(2, this.summary, () => this.summary.serialize(writer));
            if (this.has_trades)
                writer.writeMessage(3, this.trades, () => this.trades.serialize(writer));
            if (this.has_mboSnapshot)
                writer.writeMessage(4, this.mboSnapshot, () => this.mboSnapshot.serialize(writer));
            if (this.has_mboDiff)
                writer.writeMessage(5, this.mboDiff, () => this.mboDiff.serialize(writer));
            if (this.has_mbpSnapshot)
                writer.writeMessage(6, this.mbpSnapshot, () => this.mbpSnapshot.serialize(writer));
            if (this.has_mbpDiff)
                writer.writeMessage(7, this.mbpDiff, () => this.mbpDiff.serialize(writer));
            if (this.has_kline)
                writer.writeMessage(8, this.kline, () => this.kline.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MdMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.heartbeat, () => message.heartbeat = Heartbeat.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.summary, () => message.summary = Summary.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.trades, () => message.trades = Trades.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.mboSnapshot, () => message.mboSnapshot = MarketByOrder.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.mboDiff, () => message.mboDiff = MarketByOrderDiff.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.mbpSnapshot, () => message.mbpSnapshot = MarketByPrice.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.mbpDiff, () => message.mbpDiff = MarketByPriceDiff.deserialize(reader));
                        break;
                    case 8:
                        reader.readMessage(message.kline, () => message.kline = Kline.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MdMessage.deserialize(bytes);
        }
    }
    _MdMessage_one_of_decls = new WeakMap();
    md.MdMessage = MdMessage;
    class MarketByPrice extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MarketByPrice_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MarketByPrice_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("levels" in data && data.levels != undefined) {
                    this.levels = data.levels;
                }
                if ("chunk" in data && data.chunk != undefined) {
                    this.chunk = data.chunk;
                }
                if ("numChunks" in data && data.numChunks != undefined) {
                    this.numChunks = data.numChunks;
                }
            }
        }
        get levels() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, MarketByPrice.Level, 1);
        }
        set levels(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        get chunk() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set chunk(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get numChunks() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set numChunks(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        static fromObject(data) {
            const message = new MarketByPrice({});
            if (data.levels != null) {
                message.levels = data.levels.map(item => MarketByPrice.Level.fromObject(item));
            }
            if (data.chunk != null) {
                message.chunk = data.chunk;
            }
            if (data.numChunks != null) {
                message.numChunks = data.numChunks;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.levels != null) {
                data.levels = this.levels.map((item) => item.toObject());
            }
            if (this.chunk != null) {
                data.chunk = this.chunk;
            }
            if (this.numChunks != null) {
                data.numChunks = this.numChunks;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.levels.length)
                writer.writeRepeatedMessage(1, this.levels, (item) => item.serialize(writer));
            if (this.chunk != 0)
                writer.writeUint32(2, this.chunk);
            if (this.numChunks != 0)
                writer.writeUint32(3, this.numChunks);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MarketByPrice();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.levels, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, MarketByPrice.Level.deserialize(reader), MarketByPrice.Level));
                        break;
                    case 2:
                        message.chunk = reader.readUint32();
                        break;
                    case 3:
                        message.numChunks = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MarketByPrice.deserialize(bytes);
        }
    }
    _MarketByPrice_one_of_decls = new WeakMap();
    md.MarketByPrice = MarketByPrice;
    (function (MarketByPrice) {
        var _Level_one_of_decls;
        class Level extends pb_1__namespace.Message {
            constructor(data) {
                super();
                _Level_one_of_decls.set(this, []);
                pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Level_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("price" in data && data.price != undefined) {
                        this.price = data.price;
                    }
                    if ("quantity" in data && data.quantity != undefined) {
                        this.quantity = data.quantity;
                    }
                    if ("side" in data && data.side != undefined) {
                        this.side = data.side;
                    }
                }
            }
            get price() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
            }
            set price(value) {
                pb_1__namespace.Message.setField(this, 1, value);
            }
            get quantity() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
            }
            set quantity(value) {
                pb_1__namespace.Message.setField(this, 2, value);
            }
            get side() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 3, Side.BID);
            }
            set side(value) {
                pb_1__namespace.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new Level({});
                if (data.price != null) {
                    message.price = data.price;
                }
                if (data.quantity != null) {
                    message.quantity = data.quantity;
                }
                if (data.side != null) {
                    message.side = data.side;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.price != null) {
                    data.price = this.price;
                }
                if (this.quantity != null) {
                    data.quantity = this.quantity;
                }
                if (this.side != null) {
                    data.side = this.side;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1__namespace.BinaryWriter();
                if (this.price != 0)
                    writer.writeUint64(1, this.price);
                if (this.quantity != 0)
                    writer.writeUint64(2, this.quantity);
                if (this.side != Side.BID)
                    writer.writeEnum(3, this.side);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Level();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.price = reader.readUint64();
                            break;
                        case 2:
                            message.quantity = reader.readUint64();
                            break;
                        case 3:
                            message.side = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Level.deserialize(bytes);
            }
        }
        _Level_one_of_decls = new WeakMap();
        MarketByPrice.Level = Level;
    })(MarketByPrice = md.MarketByPrice || (md.MarketByPrice = {}));
    class MarketByPriceDiff extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MarketByPriceDiff_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MarketByPriceDiff_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("diffs" in data && data.diffs != undefined) {
                    this.diffs = data.diffs;
                }
                if ("totalBidLevels" in data && data.totalBidLevels != undefined) {
                    this.totalBidLevels = data.totalBidLevels;
                }
                if ("totalAskLevels" in data && data.totalAskLevels != undefined) {
                    this.totalAskLevels = data.totalAskLevels;
                }
            }
        }
        get diffs() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, MarketByPriceDiff.Diff, 1);
        }
        set diffs(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        get totalBidLevels() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set totalBidLevels(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get totalAskLevels() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set totalAskLevels(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        static fromObject(data) {
            const message = new MarketByPriceDiff({});
            if (data.diffs != null) {
                message.diffs = data.diffs.map(item => MarketByPriceDiff.Diff.fromObject(item));
            }
            if (data.totalBidLevels != null) {
                message.totalBidLevels = data.totalBidLevels;
            }
            if (data.totalAskLevels != null) {
                message.totalAskLevels = data.totalAskLevels;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.diffs != null) {
                data.diffs = this.diffs.map((item) => item.toObject());
            }
            if (this.totalBidLevels != null) {
                data.totalBidLevels = this.totalBidLevels;
            }
            if (this.totalAskLevels != null) {
                data.totalAskLevels = this.totalAskLevels;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.diffs.length)
                writer.writeRepeatedMessage(1, this.diffs, (item) => item.serialize(writer));
            if (this.totalBidLevels != 0)
                writer.writeUint32(2, this.totalBidLevels);
            if (this.totalAskLevels != 0)
                writer.writeUint32(3, this.totalAskLevels);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MarketByPriceDiff();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.diffs, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, MarketByPriceDiff.Diff.deserialize(reader), MarketByPriceDiff.Diff));
                        break;
                    case 2:
                        message.totalBidLevels = reader.readUint32();
                        break;
                    case 3:
                        message.totalAskLevels = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MarketByPriceDiff.deserialize(bytes);
        }
    }
    _MarketByPriceDiff_one_of_decls = new WeakMap();
    md.MarketByPriceDiff = MarketByPriceDiff;
    (function (MarketByPriceDiff) {
        var _Diff_one_of_decls;
        (function (DiffOp) {
            DiffOp[DiffOp["ADD"] = 0] = "ADD";
            DiffOp[DiffOp["REMOVE"] = 1] = "REMOVE";
            DiffOp[DiffOp["REPLACE"] = 2] = "REPLACE";
        })(MarketByPriceDiff.DiffOp || (MarketByPriceDiff.DiffOp = {}));
        class Diff extends pb_1__namespace.Message {
            constructor(data) {
                super();
                _Diff_one_of_decls.set(this, []);
                pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Diff_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("price" in data && data.price != undefined) {
                        this.price = data.price;
                    }
                    if ("quantity" in data && data.quantity != undefined) {
                        this.quantity = data.quantity;
                    }
                    if ("side" in data && data.side != undefined) {
                        this.side = data.side;
                    }
                    if ("op" in data && data.op != undefined) {
                        this.op = data.op;
                    }
                }
            }
            get price() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
            }
            set price(value) {
                pb_1__namespace.Message.setField(this, 1, value);
            }
            get quantity() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
            }
            set quantity(value) {
                pb_1__namespace.Message.setField(this, 2, value);
            }
            get side() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 3, Side.BID);
            }
            set side(value) {
                pb_1__namespace.Message.setField(this, 3, value);
            }
            get op() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 4, MarketByPriceDiff.DiffOp.ADD);
            }
            set op(value) {
                pb_1__namespace.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new Diff({});
                if (data.price != null) {
                    message.price = data.price;
                }
                if (data.quantity != null) {
                    message.quantity = data.quantity;
                }
                if (data.side != null) {
                    message.side = data.side;
                }
                if (data.op != null) {
                    message.op = data.op;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.price != null) {
                    data.price = this.price;
                }
                if (this.quantity != null) {
                    data.quantity = this.quantity;
                }
                if (this.side != null) {
                    data.side = this.side;
                }
                if (this.op != null) {
                    data.op = this.op;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1__namespace.BinaryWriter();
                if (this.price != 0)
                    writer.writeUint64(1, this.price);
                if (this.quantity != 0)
                    writer.writeUint64(2, this.quantity);
                if (this.side != Side.BID)
                    writer.writeEnum(3, this.side);
                if (this.op != MarketByPriceDiff.DiffOp.ADD)
                    writer.writeEnum(4, this.op);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Diff();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.price = reader.readUint64();
                            break;
                        case 2:
                            message.quantity = reader.readUint64();
                            break;
                        case 3:
                            message.side = reader.readEnum();
                            break;
                        case 4:
                            message.op = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Diff.deserialize(bytes);
            }
        }
        _Diff_one_of_decls = new WeakMap();
        MarketByPriceDiff.Diff = Diff;
    })(MarketByPriceDiff = md.MarketByPriceDiff || (md.MarketByPriceDiff = {}));
    class MarketByOrder extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MarketByOrder_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MarketByOrder_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("orders" in data && data.orders != undefined) {
                    this.orders = data.orders;
                }
                if ("chunk" in data && data.chunk != undefined) {
                    this.chunk = data.chunk;
                }
                if ("numChunks" in data && data.numChunks != undefined) {
                    this.numChunks = data.numChunks;
                }
            }
        }
        get orders() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, MarketByOrder.Order, 1);
        }
        set orders(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        get chunk() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set chunk(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get numChunks() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set numChunks(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        static fromObject(data) {
            const message = new MarketByOrder({});
            if (data.orders != null) {
                message.orders = data.orders.map(item => MarketByOrder.Order.fromObject(item));
            }
            if (data.chunk != null) {
                message.chunk = data.chunk;
            }
            if (data.numChunks != null) {
                message.numChunks = data.numChunks;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.orders != null) {
                data.orders = this.orders.map((item) => item.toObject());
            }
            if (this.chunk != null) {
                data.chunk = this.chunk;
            }
            if (this.numChunks != null) {
                data.numChunks = this.numChunks;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.orders.length)
                writer.writeRepeatedMessage(1, this.orders, (item) => item.serialize(writer));
            if (this.chunk != 0)
                writer.writeUint32(2, this.chunk);
            if (this.numChunks != 0)
                writer.writeUint32(3, this.numChunks);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MarketByOrder();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.orders, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, MarketByOrder.Order.deserialize(reader), MarketByOrder.Order));
                        break;
                    case 2:
                        message.chunk = reader.readUint32();
                        break;
                    case 3:
                        message.numChunks = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MarketByOrder.deserialize(bytes);
        }
    }
    _MarketByOrder_one_of_decls = new WeakMap();
    md.MarketByOrder = MarketByOrder;
    (function (MarketByOrder) {
        var _Order_one_of_decls;
        class Order extends pb_1__namespace.Message {
            constructor(data) {
                super();
                _Order_one_of_decls.set(this, []);
                pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Order_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("price" in data && data.price != undefined) {
                        this.price = data.price;
                    }
                    if ("quantity" in data && data.quantity != undefined) {
                        this.quantity = data.quantity;
                    }
                    if ("exchangeOrderId" in data && data.exchangeOrderId != undefined) {
                        this.exchangeOrderId = data.exchangeOrderId;
                    }
                    if ("side" in data && data.side != undefined) {
                        this.side = data.side;
                    }
                }
            }
            get price() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
            }
            set price(value) {
                pb_1__namespace.Message.setField(this, 1, value);
            }
            get quantity() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
            }
            set quantity(value) {
                pb_1__namespace.Message.setField(this, 2, value);
            }
            get exchangeOrderId() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
            }
            set exchangeOrderId(value) {
                pb_1__namespace.Message.setField(this, 3, value);
            }
            get side() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 4, Side.BID);
            }
            set side(value) {
                pb_1__namespace.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new Order({});
                if (data.price != null) {
                    message.price = data.price;
                }
                if (data.quantity != null) {
                    message.quantity = data.quantity;
                }
                if (data.exchangeOrderId != null) {
                    message.exchangeOrderId = data.exchangeOrderId;
                }
                if (data.side != null) {
                    message.side = data.side;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.price != null) {
                    data.price = this.price;
                }
                if (this.quantity != null) {
                    data.quantity = this.quantity;
                }
                if (this.exchangeOrderId != null) {
                    data.exchangeOrderId = this.exchangeOrderId;
                }
                if (this.side != null) {
                    data.side = this.side;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1__namespace.BinaryWriter();
                if (this.price != 0)
                    writer.writeUint64(1, this.price);
                if (this.quantity != 0)
                    writer.writeUint64(2, this.quantity);
                if (this.exchangeOrderId != 0)
                    writer.writeUint64(3, this.exchangeOrderId);
                if (this.side != Side.BID)
                    writer.writeEnum(4, this.side);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Order();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.price = reader.readUint64();
                            break;
                        case 2:
                            message.quantity = reader.readUint64();
                            break;
                        case 3:
                            message.exchangeOrderId = reader.readUint64();
                            break;
                        case 4:
                            message.side = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Order.deserialize(bytes);
            }
        }
        _Order_one_of_decls = new WeakMap();
        MarketByOrder.Order = Order;
    })(MarketByOrder = md.MarketByOrder || (md.MarketByOrder = {}));
    class MarketByOrderDiff extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MarketByOrderDiff_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MarketByOrderDiff_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("diffs" in data && data.diffs != undefined) {
                    this.diffs = data.diffs;
                }
                if ("totalBidLevels" in data && data.totalBidLevels != undefined) {
                    this.totalBidLevels = data.totalBidLevels;
                }
                if ("totalAskLevels" in data && data.totalAskLevels != undefined) {
                    this.totalAskLevels = data.totalAskLevels;
                }
                if ("totalBidOrders" in data && data.totalBidOrders != undefined) {
                    this.totalBidOrders = data.totalBidOrders;
                }
                if ("totalAskOrders" in data && data.totalAskOrders != undefined) {
                    this.totalAskOrders = data.totalAskOrders;
                }
            }
        }
        get diffs() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, MarketByOrderDiff.Diff, 1);
        }
        set diffs(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        get totalBidLevels() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set totalBidLevels(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get totalAskLevels() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set totalAskLevels(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get totalBidOrders() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, 0);
        }
        set totalBidOrders(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        get totalAskOrders() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 5, 0);
        }
        set totalAskOrders(value) {
            pb_1__namespace.Message.setField(this, 5, value);
        }
        static fromObject(data) {
            const message = new MarketByOrderDiff({});
            if (data.diffs != null) {
                message.diffs = data.diffs.map(item => MarketByOrderDiff.Diff.fromObject(item));
            }
            if (data.totalBidLevels != null) {
                message.totalBidLevels = data.totalBidLevels;
            }
            if (data.totalAskLevels != null) {
                message.totalAskLevels = data.totalAskLevels;
            }
            if (data.totalBidOrders != null) {
                message.totalBidOrders = data.totalBidOrders;
            }
            if (data.totalAskOrders != null) {
                message.totalAskOrders = data.totalAskOrders;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.diffs != null) {
                data.diffs = this.diffs.map((item) => item.toObject());
            }
            if (this.totalBidLevels != null) {
                data.totalBidLevels = this.totalBidLevels;
            }
            if (this.totalAskLevels != null) {
                data.totalAskLevels = this.totalAskLevels;
            }
            if (this.totalBidOrders != null) {
                data.totalBidOrders = this.totalBidOrders;
            }
            if (this.totalAskOrders != null) {
                data.totalAskOrders = this.totalAskOrders;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.diffs.length)
                writer.writeRepeatedMessage(1, this.diffs, (item) => item.serialize(writer));
            if (this.totalBidLevels != 0)
                writer.writeUint32(2, this.totalBidLevels);
            if (this.totalAskLevels != 0)
                writer.writeUint32(3, this.totalAskLevels);
            if (this.totalBidOrders != 0)
                writer.writeUint32(4, this.totalBidOrders);
            if (this.totalAskOrders != 0)
                writer.writeUint32(5, this.totalAskOrders);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MarketByOrderDiff();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.diffs, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, MarketByOrderDiff.Diff.deserialize(reader), MarketByOrderDiff.Diff));
                        break;
                    case 2:
                        message.totalBidLevels = reader.readUint32();
                        break;
                    case 3:
                        message.totalAskLevels = reader.readUint32();
                        break;
                    case 4:
                        message.totalBidOrders = reader.readUint32();
                        break;
                    case 5:
                        message.totalAskOrders = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MarketByOrderDiff.deserialize(bytes);
        }
    }
    _MarketByOrderDiff_one_of_decls = new WeakMap();
    md.MarketByOrderDiff = MarketByOrderDiff;
    (function (MarketByOrderDiff) {
        var _Diff_one_of_decls_1;
        (function (DiffOp) {
            DiffOp[DiffOp["ADD"] = 0] = "ADD";
            DiffOp[DiffOp["REMOVE"] = 1] = "REMOVE";
            DiffOp[DiffOp["REPLACE"] = 2] = "REPLACE";
        })(MarketByOrderDiff.DiffOp || (MarketByOrderDiff.DiffOp = {}));
        class Diff extends pb_1__namespace.Message {
            constructor(data) {
                super();
                _Diff_one_of_decls_1.set(this, []);
                pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Diff_one_of_decls_1, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("price" in data && data.price != undefined) {
                        this.price = data.price;
                    }
                    if ("quantity" in data && data.quantity != undefined) {
                        this.quantity = data.quantity;
                    }
                    if ("exchangeOrderId" in data && data.exchangeOrderId != undefined) {
                        this.exchangeOrderId = data.exchangeOrderId;
                    }
                    if ("side" in data && data.side != undefined) {
                        this.side = data.side;
                    }
                    if ("op" in data && data.op != undefined) {
                        this.op = data.op;
                    }
                }
            }
            get price() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
            }
            set price(value) {
                pb_1__namespace.Message.setField(this, 1, value);
            }
            get quantity() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
            }
            set quantity(value) {
                pb_1__namespace.Message.setField(this, 2, value);
            }
            get exchangeOrderId() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
            }
            set exchangeOrderId(value) {
                pb_1__namespace.Message.setField(this, 3, value);
            }
            get side() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 4, Side.BID);
            }
            set side(value) {
                pb_1__namespace.Message.setField(this, 4, value);
            }
            get op() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 5, MarketByOrderDiff.DiffOp.ADD);
            }
            set op(value) {
                pb_1__namespace.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new Diff({});
                if (data.price != null) {
                    message.price = data.price;
                }
                if (data.quantity != null) {
                    message.quantity = data.quantity;
                }
                if (data.exchangeOrderId != null) {
                    message.exchangeOrderId = data.exchangeOrderId;
                }
                if (data.side != null) {
                    message.side = data.side;
                }
                if (data.op != null) {
                    message.op = data.op;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.price != null) {
                    data.price = this.price;
                }
                if (this.quantity != null) {
                    data.quantity = this.quantity;
                }
                if (this.exchangeOrderId != null) {
                    data.exchangeOrderId = this.exchangeOrderId;
                }
                if (this.side != null) {
                    data.side = this.side;
                }
                if (this.op != null) {
                    data.op = this.op;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1__namespace.BinaryWriter();
                if (this.price != 0)
                    writer.writeUint64(1, this.price);
                if (this.quantity != 0)
                    writer.writeUint64(2, this.quantity);
                if (this.exchangeOrderId != 0)
                    writer.writeUint64(3, this.exchangeOrderId);
                if (this.side != Side.BID)
                    writer.writeEnum(4, this.side);
                if (this.op != MarketByOrderDiff.DiffOp.ADD)
                    writer.writeEnum(5, this.op);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Diff();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.price = reader.readUint64();
                            break;
                        case 2:
                            message.quantity = reader.readUint64();
                            break;
                        case 3:
                            message.exchangeOrderId = reader.readUint64();
                            break;
                        case 4:
                            message.side = reader.readEnum();
                            break;
                        case 5:
                            message.op = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Diff.deserialize(bytes);
            }
        }
        _Diff_one_of_decls_1 = new WeakMap();
        MarketByOrderDiff.Diff = Diff;
    })(MarketByOrderDiff = md.MarketByOrderDiff || (md.MarketByOrderDiff = {}));
    class Trades extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _Trades_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _Trades_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("trades" in data && data.trades != undefined) {
                    this.trades = data.trades;
                }
            }
        }
        get trades() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, Trades.Trade, 1);
        }
        set trades(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data) {
            const message = new Trades({});
            if (data.trades != null) {
                message.trades = data.trades.map(item => Trades.Trade.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.trades != null) {
                data.trades = this.trades.map((item) => item.toObject());
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.trades.length)
                writer.writeRepeatedMessage(1, this.trades, (item) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Trades();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.trades, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, Trades.Trade.deserialize(reader), Trades.Trade));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Trades.deserialize(bytes);
        }
    }
    _Trades_one_of_decls = new WeakMap();
    md.Trades = Trades;
    (function (Trades) {
        var _Trade_one_of_decls;
        class Trade extends pb_1__namespace.Message {
            constructor(data) {
                super();
                _Trade_one_of_decls.set(this, []);
                pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Trade_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("tradeId" in data && data.tradeId != undefined) {
                        this.tradeId = data.tradeId;
                    }
                    if ("price" in data && data.price != undefined) {
                        this.price = data.price;
                    }
                    if ("aggressingSide" in data && data.aggressingSide != undefined) {
                        this.aggressingSide = data.aggressingSide;
                    }
                    if ("restingExchangeOrderId" in data && data.restingExchangeOrderId != undefined) {
                        this.restingExchangeOrderId = data.restingExchangeOrderId;
                    }
                    if ("fillQuantity" in data && data.fillQuantity != undefined) {
                        this.fillQuantity = data.fillQuantity;
                    }
                    if ("transactTime" in data && data.transactTime != undefined) {
                        this.transactTime = data.transactTime;
                    }
                    if ("aggressingExchangeOrderId" in data && data.aggressingExchangeOrderId != undefined) {
                        this.aggressingExchangeOrderId = data.aggressingExchangeOrderId;
                    }
                }
            }
            get tradeId() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
            }
            set tradeId(value) {
                pb_1__namespace.Message.setField(this, 1, value);
            }
            get price() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
            }
            set price(value) {
                pb_1__namespace.Message.setField(this, 2, value);
            }
            get aggressingSide() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 3, Side.BID);
            }
            set aggressingSide(value) {
                pb_1__namespace.Message.setField(this, 3, value);
            }
            get restingExchangeOrderId() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 4, 0);
            }
            set restingExchangeOrderId(value) {
                pb_1__namespace.Message.setField(this, 4, value);
            }
            get fillQuantity() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 5, 0);
            }
            set fillQuantity(value) {
                pb_1__namespace.Message.setField(this, 5, value);
            }
            get transactTime() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 6, 0);
            }
            set transactTime(value) {
                pb_1__namespace.Message.setField(this, 6, value);
            }
            get aggressingExchangeOrderId() {
                return pb_1__namespace.Message.getFieldWithDefault(this, 7, 0);
            }
            set aggressingExchangeOrderId(value) {
                pb_1__namespace.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new Trade({});
                if (data.tradeId != null) {
                    message.tradeId = data.tradeId;
                }
                if (data.price != null) {
                    message.price = data.price;
                }
                if (data.aggressingSide != null) {
                    message.aggressingSide = data.aggressingSide;
                }
                if (data.restingExchangeOrderId != null) {
                    message.restingExchangeOrderId = data.restingExchangeOrderId;
                }
                if (data.fillQuantity != null) {
                    message.fillQuantity = data.fillQuantity;
                }
                if (data.transactTime != null) {
                    message.transactTime = data.transactTime;
                }
                if (data.aggressingExchangeOrderId != null) {
                    message.aggressingExchangeOrderId = data.aggressingExchangeOrderId;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.tradeId != null) {
                    data.tradeId = this.tradeId;
                }
                if (this.price != null) {
                    data.price = this.price;
                }
                if (this.aggressingSide != null) {
                    data.aggressingSide = this.aggressingSide;
                }
                if (this.restingExchangeOrderId != null) {
                    data.restingExchangeOrderId = this.restingExchangeOrderId;
                }
                if (this.fillQuantity != null) {
                    data.fillQuantity = this.fillQuantity;
                }
                if (this.transactTime != null) {
                    data.transactTime = this.transactTime;
                }
                if (this.aggressingExchangeOrderId != null) {
                    data.aggressingExchangeOrderId = this.aggressingExchangeOrderId;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1__namespace.BinaryWriter();
                if (this.tradeId != 0)
                    writer.writeUint64(1, this.tradeId);
                if (this.price != 0)
                    writer.writeUint64(2, this.price);
                if (this.aggressingSide != Side.BID)
                    writer.writeEnum(3, this.aggressingSide);
                if (this.restingExchangeOrderId != 0)
                    writer.writeUint64(4, this.restingExchangeOrderId);
                if (this.fillQuantity != 0)
                    writer.writeUint64(5, this.fillQuantity);
                if (this.transactTime != 0)
                    writer.writeUint64(6, this.transactTime);
                if (this.aggressingExchangeOrderId != 0)
                    writer.writeUint64(7, this.aggressingExchangeOrderId);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Trade();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.tradeId = reader.readUint64();
                            break;
                        case 2:
                            message.price = reader.readUint64();
                            break;
                        case 3:
                            message.aggressingSide = reader.readEnum();
                            break;
                        case 4:
                            message.restingExchangeOrderId = reader.readUint64();
                            break;
                        case 5:
                            message.fillQuantity = reader.readUint64();
                            break;
                        case 6:
                            message.transactTime = reader.readUint64();
                            break;
                        case 7:
                            message.aggressingExchangeOrderId = reader.readUint64();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Trade.deserialize(bytes);
            }
        }
        _Trade_one_of_decls = new WeakMap();
        Trades.Trade = Trade;
    })(Trades = md.Trades || (md.Trades = {}));
    class Summary extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _Summary_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Summary_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("open" in data && data.open != undefined) {
                    this.open = data.open;
                }
                if ("close" in data && data.close != undefined) {
                    this.close = data.close;
                }
                if ("low" in data && data.low != undefined) {
                    this.low = data.low;
                }
                if ("high" in data && data.high != undefined) {
                    this.high = data.high;
                }
                if ("baseVolumeLo" in data && data.baseVolumeLo != undefined) {
                    this.baseVolumeLo = data.baseVolumeLo;
                }
                if ("baseVolumeHi" in data && data.baseVolumeHi != undefined) {
                    this.baseVolumeHi = data.baseVolumeHi;
                }
                if ("quoteVolumeLo" in data && data.quoteVolumeLo != undefined) {
                    this.quoteVolumeLo = data.quoteVolumeLo;
                }
                if ("quoteVolumeHi" in data && data.quoteVolumeHi != undefined) {
                    this.quoteVolumeHi = data.quoteVolumeHi;
                }
            }
        }
        get open() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
        }
        set open(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get close() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set close(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get low() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set low(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get high() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, 0);
        }
        set high(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        get baseVolumeLo() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 5, 0);
        }
        set baseVolumeLo(value) {
            pb_1__namespace.Message.setField(this, 5, value);
        }
        get baseVolumeHi() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 6, 0);
        }
        set baseVolumeHi(value) {
            pb_1__namespace.Message.setField(this, 6, value);
        }
        get quoteVolumeLo() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 7, 0);
        }
        set quoteVolumeLo(value) {
            pb_1__namespace.Message.setField(this, 7, value);
        }
        get quoteVolumeHi() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 8, 0);
        }
        set quoteVolumeHi(value) {
            pb_1__namespace.Message.setField(this, 8, value);
        }
        static fromObject(data) {
            const message = new Summary({});
            if (data.open != null) {
                message.open = data.open;
            }
            if (data.close != null) {
                message.close = data.close;
            }
            if (data.low != null) {
                message.low = data.low;
            }
            if (data.high != null) {
                message.high = data.high;
            }
            if (data.baseVolumeLo != null) {
                message.baseVolumeLo = data.baseVolumeLo;
            }
            if (data.baseVolumeHi != null) {
                message.baseVolumeHi = data.baseVolumeHi;
            }
            if (data.quoteVolumeLo != null) {
                message.quoteVolumeLo = data.quoteVolumeLo;
            }
            if (data.quoteVolumeHi != null) {
                message.quoteVolumeHi = data.quoteVolumeHi;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.open != null) {
                data.open = this.open;
            }
            if (this.close != null) {
                data.close = this.close;
            }
            if (this.low != null) {
                data.low = this.low;
            }
            if (this.high != null) {
                data.high = this.high;
            }
            if (this.baseVolumeLo != null) {
                data.baseVolumeLo = this.baseVolumeLo;
            }
            if (this.baseVolumeHi != null) {
                data.baseVolumeHi = this.baseVolumeHi;
            }
            if (this.quoteVolumeLo != null) {
                data.quoteVolumeLo = this.quoteVolumeLo;
            }
            if (this.quoteVolumeHi != null) {
                data.quoteVolumeHi = this.quoteVolumeHi;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.open != 0)
                writer.writeUint64(1, this.open);
            if (this.close != 0)
                writer.writeUint64(2, this.close);
            if (this.low != 0)
                writer.writeUint64(3, this.low);
            if (this.high != 0)
                writer.writeUint64(4, this.high);
            if (this.baseVolumeLo != 0)
                writer.writeUint64(5, this.baseVolumeLo);
            if (this.baseVolumeHi != 0)
                writer.writeUint64(6, this.baseVolumeHi);
            if (this.quoteVolumeLo != 0)
                writer.writeUint64(7, this.quoteVolumeLo);
            if (this.quoteVolumeHi != 0)
                writer.writeUint64(8, this.quoteVolumeHi);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Summary();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.open = reader.readUint64();
                        break;
                    case 2:
                        message.close = reader.readUint64();
                        break;
                    case 3:
                        message.low = reader.readUint64();
                        break;
                    case 4:
                        message.high = reader.readUint64();
                        break;
                    case 5:
                        message.baseVolumeLo = reader.readUint64();
                        break;
                    case 6:
                        message.baseVolumeHi = reader.readUint64();
                        break;
                    case 7:
                        message.quoteVolumeLo = reader.readUint64();
                        break;
                    case 8:
                        message.quoteVolumeHi = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Summary.deserialize(bytes);
        }
    }
    _Summary_one_of_decls = new WeakMap();
    md.Summary = Summary;
    class Kline extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _Kline_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Kline_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("interval" in data && data.interval != undefined) {
                    this.interval = data.interval;
                }
                if ("startTime" in data && data.startTime != undefined) {
                    this.startTime = data.startTime;
                }
                if ("open" in data && data.open != undefined) {
                    this.open = data.open;
                }
                if ("close" in data && data.close != undefined) {
                    this.close = data.close;
                }
                if ("high" in data && data.high != undefined) {
                    this.high = data.high;
                }
                if ("low" in data && data.low != undefined) {
                    this.low = data.low;
                }
                if ("volumeLo" in data && data.volumeLo != undefined) {
                    this.volumeLo = data.volumeLo;
                }
                if ("volumeHi" in data && data.volumeHi != undefined) {
                    this.volumeHi = data.volumeHi;
                }
            }
        }
        get interval() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, KlineInterval.S1);
        }
        set interval(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get startTime() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set startTime(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get open() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set open(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get close() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, 0);
        }
        set close(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        get high() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 5, 0);
        }
        set high(value) {
            pb_1__namespace.Message.setField(this, 5, value);
        }
        get low() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 6, 0);
        }
        set low(value) {
            pb_1__namespace.Message.setField(this, 6, value);
        }
        get volumeLo() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 7, 0);
        }
        set volumeLo(value) {
            pb_1__namespace.Message.setField(this, 7, value);
        }
        get volumeHi() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 8, 0);
        }
        set volumeHi(value) {
            pb_1__namespace.Message.setField(this, 8, value);
        }
        static fromObject(data) {
            const message = new Kline({});
            if (data.interval != null) {
                message.interval = data.interval;
            }
            if (data.startTime != null) {
                message.startTime = data.startTime;
            }
            if (data.open != null) {
                message.open = data.open;
            }
            if (data.close != null) {
                message.close = data.close;
            }
            if (data.high != null) {
                message.high = data.high;
            }
            if (data.low != null) {
                message.low = data.low;
            }
            if (data.volumeLo != null) {
                message.volumeLo = data.volumeLo;
            }
            if (data.volumeHi != null) {
                message.volumeHi = data.volumeHi;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.interval != null) {
                data.interval = this.interval;
            }
            if (this.startTime != null) {
                data.startTime = this.startTime;
            }
            if (this.open != null) {
                data.open = this.open;
            }
            if (this.close != null) {
                data.close = this.close;
            }
            if (this.high != null) {
                data.high = this.high;
            }
            if (this.low != null) {
                data.low = this.low;
            }
            if (this.volumeLo != null) {
                data.volumeLo = this.volumeLo;
            }
            if (this.volumeHi != null) {
                data.volumeHi = this.volumeHi;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.interval != KlineInterval.S1)
                writer.writeEnum(1, this.interval);
            if (this.startTime != 0)
                writer.writeUint64(2, this.startTime);
            if (this.open != 0)
                writer.writeUint64(3, this.open);
            if (this.close != 0)
                writer.writeUint64(4, this.close);
            if (this.high != 0)
                writer.writeUint64(5, this.high);
            if (this.low != 0)
                writer.writeUint64(6, this.low);
            if (this.volumeLo != 0)
                writer.writeUint64(7, this.volumeLo);
            if (this.volumeHi != 0)
                writer.writeUint64(8, this.volumeHi);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Kline();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.interval = reader.readEnum();
                        break;
                    case 2:
                        message.startTime = reader.readUint64();
                        break;
                    case 3:
                        message.open = reader.readUint64();
                        break;
                    case 4:
                        message.close = reader.readUint64();
                        break;
                    case 5:
                        message.high = reader.readUint64();
                        break;
                    case 6:
                        message.low = reader.readUint64();
                        break;
                    case 7:
                        message.volumeLo = reader.readUint64();
                        break;
                    case 8:
                        message.volumeHi = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Kline.deserialize(bytes);
        }
    }
    _Kline_one_of_decls = new WeakMap();
    md.Kline = Kline;
    class Heartbeat extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _Heartbeat_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Heartbeat_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("requestId" in data && data.requestId != undefined) {
                    this.requestId = data.requestId;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get requestId() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
        }
        set requestId(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get timestamp() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set timestamp(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        static fromObject(data) {
            const message = new Heartbeat({});
            if (data.requestId != null) {
                message.requestId = data.requestId;
            }
            if (data.timestamp != null) {
                message.timestamp = data.timestamp;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.requestId != null) {
                data.requestId = this.requestId;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.requestId != 0)
                writer.writeUint64(1, this.requestId);
            if (this.timestamp != 0)
                writer.writeUint64(2, this.timestamp);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Heartbeat();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.requestId = reader.readUint64();
                        break;
                    case 2:
                        message.timestamp = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Heartbeat.deserialize(bytes);
        }
    }
    _Heartbeat_one_of_decls = new WeakMap();
    md.Heartbeat = Heartbeat;
    class MdMessages extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _MdMessages_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MdMessages_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("messages" in data && data.messages != undefined) {
                    this.messages = data.messages;
                }
            }
        }
        get messages() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, MdMessage, 1);
        }
        set messages(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data) {
            const message = new MdMessages({});
            if (data.messages != null) {
                message.messages = data.messages.map(item => MdMessage.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.messages != null) {
                data.messages = this.messages.map((item) => item.toObject());
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.messages.length)
                writer.writeRepeatedMessage(1, this.messages, (item) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new MdMessages();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.messages, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, MdMessage.deserialize(reader), MdMessage));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return MdMessages.deserialize(bytes);
        }
    }
    _MdMessages_one_of_decls = new WeakMap();
    md.MdMessages = MdMessages;
    class AggMessage extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _AggMessage_one_of_decls.set(this, [[1, 2, 3]]);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AggMessage_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("heartbeat" in data && data.heartbeat != undefined) {
                    this.heartbeat = data.heartbeat;
                }
                if ("topOfBooks" in data && data.topOfBooks != undefined) {
                    this.topOfBooks = data.topOfBooks;
                }
                if ("rateUpdates" in data && data.rateUpdates != undefined) {
                    this.rateUpdates = data.rateUpdates;
                }
            }
        }
        get heartbeat() {
            return pb_1__namespace.Message.getWrapperField(this, Heartbeat, 1);
        }
        set heartbeat(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 1, __classPrivateFieldGet(this, _AggMessage_one_of_decls, "f")[0], value);
        }
        get has_heartbeat() {
            return pb_1__namespace.Message.getField(this, 1) != null;
        }
        get topOfBooks() {
            return pb_1__namespace.Message.getWrapperField(this, TopOfBooks, 2);
        }
        set topOfBooks(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 2, __classPrivateFieldGet(this, _AggMessage_one_of_decls, "f")[0], value);
        }
        get has_topOfBooks() {
            return pb_1__namespace.Message.getField(this, 2) != null;
        }
        get rateUpdates() {
            return pb_1__namespace.Message.getWrapperField(this, RateUpdates, 3);
        }
        set rateUpdates(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 3, __classPrivateFieldGet(this, _AggMessage_one_of_decls, "f")[0], value);
        }
        get has_rateUpdates() {
            return pb_1__namespace.Message.getField(this, 3) != null;
        }
        get inner() {
            const cases = {
                0: "none",
                1: "heartbeat",
                2: "topOfBooks",
                3: "rateUpdates"
            };
            return cases[pb_1__namespace.Message.computeOneofCase(this, [1, 2, 3])];
        }
        static fromObject(data) {
            const message = new AggMessage({});
            if (data.heartbeat != null) {
                message.heartbeat = Heartbeat.fromObject(data.heartbeat);
            }
            if (data.topOfBooks != null) {
                message.topOfBooks = TopOfBooks.fromObject(data.topOfBooks);
            }
            if (data.rateUpdates != null) {
                message.rateUpdates = RateUpdates.fromObject(data.rateUpdates);
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.heartbeat != null) {
                data.heartbeat = this.heartbeat.toObject();
            }
            if (this.topOfBooks != null) {
                data.topOfBooks = this.topOfBooks.toObject();
            }
            if (this.rateUpdates != null) {
                data.rateUpdates = this.rateUpdates.toObject();
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.has_heartbeat)
                writer.writeMessage(1, this.heartbeat, () => this.heartbeat.serialize(writer));
            if (this.has_topOfBooks)
                writer.writeMessage(2, this.topOfBooks, () => this.topOfBooks.serialize(writer));
            if (this.has_rateUpdates)
                writer.writeMessage(3, this.rateUpdates, () => this.rateUpdates.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new AggMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.heartbeat, () => message.heartbeat = Heartbeat.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.topOfBooks, () => message.topOfBooks = TopOfBooks.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.rateUpdates, () => message.rateUpdates = RateUpdates.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return AggMessage.deserialize(bytes);
        }
    }
    _AggMessage_one_of_decls = new WeakMap();
    md.AggMessage = AggMessage;
    class TopOfBook extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _TopOfBook_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TopOfBook_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("marketId" in data && data.marketId != undefined) {
                    this.marketId = data.marketId;
                }
                if ("transactTime" in data && data.transactTime != undefined) {
                    this.transactTime = data.transactTime;
                }
                if ("bidPrice" in data && data.bidPrice != undefined) {
                    this.bidPrice = data.bidPrice;
                }
                if ("bidQuantity" in data && data.bidQuantity != undefined) {
                    this.bidQuantity = data.bidQuantity;
                }
                if ("askPrice" in data && data.askPrice != undefined) {
                    this.askPrice = data.askPrice;
                }
                if ("askQuantity" in data && data.askQuantity != undefined) {
                    this.askQuantity = data.askQuantity;
                }
                if ("lastPrice" in data && data.lastPrice != undefined) {
                    this.lastPrice = data.lastPrice;
                }
                if ("rolling24hPrice" in data && data.rolling24hPrice != undefined) {
                    this.rolling24hPrice = data.rolling24hPrice;
                }
            }
        }
        get marketId() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
        }
        set marketId(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get transactTime() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set transactTime(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get bidPrice() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set bidPrice(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get bidQuantity() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, 0);
        }
        set bidQuantity(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        get askPrice() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 5, 0);
        }
        set askPrice(value) {
            pb_1__namespace.Message.setField(this, 5, value);
        }
        get askQuantity() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 6, 0);
        }
        set askQuantity(value) {
            pb_1__namespace.Message.setField(this, 6, value);
        }
        get lastPrice() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 7, 0);
        }
        set lastPrice(value) {
            pb_1__namespace.Message.setField(this, 7, value);
        }
        get rolling24hPrice() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 8, 0);
        }
        set rolling24hPrice(value) {
            pb_1__namespace.Message.setField(this, 8, value);
        }
        static fromObject(data) {
            const message = new TopOfBook({});
            if (data.marketId != null) {
                message.marketId = data.marketId;
            }
            if (data.transactTime != null) {
                message.transactTime = data.transactTime;
            }
            if (data.bidPrice != null) {
                message.bidPrice = data.bidPrice;
            }
            if (data.bidQuantity != null) {
                message.bidQuantity = data.bidQuantity;
            }
            if (data.askPrice != null) {
                message.askPrice = data.askPrice;
            }
            if (data.askQuantity != null) {
                message.askQuantity = data.askQuantity;
            }
            if (data.lastPrice != null) {
                message.lastPrice = data.lastPrice;
            }
            if (data.rolling24hPrice != null) {
                message.rolling24hPrice = data.rolling24hPrice;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.marketId != null) {
                data.marketId = this.marketId;
            }
            if (this.transactTime != null) {
                data.transactTime = this.transactTime;
            }
            if (this.bidPrice != null) {
                data.bidPrice = this.bidPrice;
            }
            if (this.bidQuantity != null) {
                data.bidQuantity = this.bidQuantity;
            }
            if (this.askPrice != null) {
                data.askPrice = this.askPrice;
            }
            if (this.askQuantity != null) {
                data.askQuantity = this.askQuantity;
            }
            if (this.lastPrice != null) {
                data.lastPrice = this.lastPrice;
            }
            if (this.rolling24hPrice != null) {
                data.rolling24hPrice = this.rolling24hPrice;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.marketId != 0)
                writer.writeUint64(1, this.marketId);
            if (this.transactTime != 0)
                writer.writeUint64(2, this.transactTime);
            if (this.bidPrice != 0)
                writer.writeUint64(3, this.bidPrice);
            if (this.bidQuantity != 0)
                writer.writeUint64(4, this.bidQuantity);
            if (this.askPrice != 0)
                writer.writeUint64(5, this.askPrice);
            if (this.askQuantity != 0)
                writer.writeUint64(6, this.askQuantity);
            if (this.lastPrice != 0)
                writer.writeUint64(7, this.lastPrice);
            if (this.rolling24hPrice != 0)
                writer.writeUint64(8, this.rolling24hPrice);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new TopOfBook();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.marketId = reader.readUint64();
                        break;
                    case 2:
                        message.transactTime = reader.readUint64();
                        break;
                    case 3:
                        message.bidPrice = reader.readUint64();
                        break;
                    case 4:
                        message.bidQuantity = reader.readUint64();
                        break;
                    case 5:
                        message.askPrice = reader.readUint64();
                        break;
                    case 6:
                        message.askQuantity = reader.readUint64();
                        break;
                    case 7:
                        message.lastPrice = reader.readUint64();
                        break;
                    case 8:
                        message.rolling24hPrice = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return TopOfBook.deserialize(bytes);
        }
    }
    _TopOfBook_one_of_decls = new WeakMap();
    md.TopOfBook = TopOfBook;
    class TopOfBooks extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _TopOfBooks_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _TopOfBooks_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tops" in data && data.tops != undefined) {
                    this.tops = data.tops;
                }
            }
        }
        get tops() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, TopOfBook, 1);
        }
        set tops(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data) {
            const message = new TopOfBooks({});
            if (data.tops != null) {
                message.tops = data.tops.map(item => TopOfBook.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.tops != null) {
                data.tops = this.tops.map((item) => item.toObject());
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.tops.length)
                writer.writeRepeatedMessage(1, this.tops, (item) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new TopOfBooks();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.tops, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, TopOfBook.deserialize(reader), TopOfBook));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return TopOfBooks.deserialize(bytes);
        }
    }
    _TopOfBooks_one_of_decls = new WeakMap();
    md.TopOfBooks = TopOfBooks;
    class RateUpdate extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _RateUpdate_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _RateUpdate_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("assetId" in data && data.assetId != undefined) {
                    this.assetId = data.assetId;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
                if ("rate" in data && data.rate != undefined) {
                    this.rate = data.rate;
                }
                if ("side" in data && data.side != undefined) {
                    this.side = data.side;
                }
            }
        }
        get assetId() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, 0);
        }
        set assetId(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get timestamp() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, 0);
        }
        set timestamp(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get rate() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, 0);
        }
        set rate(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get side() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, RateUpdateSide.BASE);
        }
        set side(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        static fromObject(data) {
            const message = new RateUpdate({});
            if (data.assetId != null) {
                message.assetId = data.assetId;
            }
            if (data.timestamp != null) {
                message.timestamp = data.timestamp;
            }
            if (data.rate != null) {
                message.rate = data.rate;
            }
            if (data.side != null) {
                message.side = data.side;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.assetId != null) {
                data.assetId = this.assetId;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp;
            }
            if (this.rate != null) {
                data.rate = this.rate;
            }
            if (this.side != null) {
                data.side = this.side;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.assetId != 0)
                writer.writeUint64(1, this.assetId);
            if (this.timestamp != 0)
                writer.writeUint64(2, this.timestamp);
            if (this.rate != 0)
                writer.writeUint64(3, this.rate);
            if (this.side != RateUpdateSide.BASE)
                writer.writeEnum(4, this.side);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new RateUpdate();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.assetId = reader.readUint64();
                        break;
                    case 2:
                        message.timestamp = reader.readUint64();
                        break;
                    case 3:
                        message.rate = reader.readUint64();
                        break;
                    case 4:
                        message.side = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return RateUpdate.deserialize(bytes);
        }
    }
    _RateUpdate_one_of_decls = new WeakMap();
    md.RateUpdate = RateUpdate;
    class RateUpdates extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _RateUpdates_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _RateUpdates_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("updates" in data && data.updates != undefined) {
                    this.updates = data.updates;
                }
            }
        }
        get updates() {
            return pb_1__namespace.Message.getRepeatedWrapperField(this, RateUpdate, 1);
        }
        set updates(value) {
            pb_1__namespace.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data) {
            const message = new RateUpdates({});
            if (data.updates != null) {
                message.updates = data.updates.map(item => RateUpdate.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.updates != null) {
                data.updates = this.updates.map((item) => item.toObject());
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.updates.length)
                writer.writeRepeatedMessage(1, this.updates, (item) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new RateUpdates();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.updates, () => pb_1__namespace.Message.addToRepeatedWrapperField(message, 1, RateUpdate.deserialize(reader), RateUpdate));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return RateUpdates.deserialize(bytes);
        }
    }
    _RateUpdates_one_of_decls = new WeakMap();
    md.RateUpdates = RateUpdates;
    class ClientMessage extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _ClientMessage_one_of_decls.set(this, [[1, 2]]);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ClientMessage_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("heartbeat" in data && data.heartbeat != undefined) {
                    this.heartbeat = data.heartbeat;
                }
                if ("config" in data && data.config != undefined) {
                    this.config = data.config;
                }
            }
        }
        get heartbeat() {
            return pb_1__namespace.Message.getWrapperField(this, Heartbeat, 1);
        }
        set heartbeat(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 1, __classPrivateFieldGet(this, _ClientMessage_one_of_decls, "f")[0], value);
        }
        get has_heartbeat() {
            return pb_1__namespace.Message.getField(this, 1) != null;
        }
        get config() {
            return pb_1__namespace.Message.getWrapperField(this, Config, 2);
        }
        set config(value) {
            pb_1__namespace.Message.setOneofWrapperField(this, 2, __classPrivateFieldGet(this, _ClientMessage_one_of_decls, "f")[0], value);
        }
        get has_config() {
            return pb_1__namespace.Message.getField(this, 2) != null;
        }
        get inner() {
            const cases = {
                0: "none",
                1: "heartbeat",
                2: "config"
            };
            return cases[pb_1__namespace.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data) {
            const message = new ClientMessage({});
            if (data.heartbeat != null) {
                message.heartbeat = Heartbeat.fromObject(data.heartbeat);
            }
            if (data.config != null) {
                message.config = Config.fromObject(data.config);
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.heartbeat != null) {
                data.heartbeat = this.heartbeat.toObject();
            }
            if (this.config != null) {
                data.config = this.config.toObject();
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.has_heartbeat)
                writer.writeMessage(1, this.heartbeat, () => this.heartbeat.serialize(writer));
            if (this.has_config)
                writer.writeMessage(2, this.config, () => this.config.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new ClientMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.heartbeat, () => message.heartbeat = Heartbeat.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.config, () => message.config = Config.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return ClientMessage.deserialize(bytes);
        }
    }
    _ClientMessage_one_of_decls = new WeakMap();
    md.ClientMessage = ClientMessage;
    class Config extends pb_1__namespace.Message {
        constructor(data) {
            super();
            _Config_one_of_decls.set(this, []);
            pb_1__namespace.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _Config_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("mbp" in data && data.mbp != undefined) {
                    this.mbp = data.mbp;
                }
                if ("mbo" in data && data.mbo != undefined) {
                    this.mbo = data.mbo;
                }
                if ("trades" in data && data.trades != undefined) {
                    this.trades = data.trades;
                }
                if ("summary" in data && data.summary != undefined) {
                    this.summary = data.summary;
                }
                if ("klines" in data && data.klines != undefined) {
                    this.klines = data.klines;
                }
            }
        }
        get mbp() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 1, false);
        }
        set mbp(value) {
            pb_1__namespace.Message.setField(this, 1, value);
        }
        get mbo() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 2, false);
        }
        set mbo(value) {
            pb_1__namespace.Message.setField(this, 2, value);
        }
        get trades() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 3, false);
        }
        set trades(value) {
            pb_1__namespace.Message.setField(this, 3, value);
        }
        get summary() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 4, false);
        }
        set summary(value) {
            pb_1__namespace.Message.setField(this, 4, value);
        }
        get klines() {
            return pb_1__namespace.Message.getFieldWithDefault(this, 5, []);
        }
        set klines(value) {
            pb_1__namespace.Message.setField(this, 5, value);
        }
        static fromObject(data) {
            const message = new Config({});
            if (data.mbp != null) {
                message.mbp = data.mbp;
            }
            if (data.mbo != null) {
                message.mbo = data.mbo;
            }
            if (data.trades != null) {
                message.trades = data.trades;
            }
            if (data.summary != null) {
                message.summary = data.summary;
            }
            if (data.klines != null) {
                message.klines = data.klines;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.mbp != null) {
                data.mbp = this.mbp;
            }
            if (this.mbo != null) {
                data.mbo = this.mbo;
            }
            if (this.trades != null) {
                data.trades = this.trades;
            }
            if (this.summary != null) {
                data.summary = this.summary;
            }
            if (this.klines != null) {
                data.klines = this.klines;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1__namespace.BinaryWriter();
            if (this.mbp != false)
                writer.writeBool(1, this.mbp);
            if (this.mbo != false)
                writer.writeBool(2, this.mbo);
            if (this.trades != false)
                writer.writeBool(3, this.trades);
            if (this.summary != false)
                writer.writeBool(4, this.summary);
            if (this.klines.length)
                writer.writePackedEnum(5, this.klines);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1__namespace.BinaryReader ? bytes : new pb_1__namespace.BinaryReader(bytes), message = new Config();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.mbp = reader.readBool();
                        break;
                    case 2:
                        message.mbo = reader.readBool();
                        break;
                    case 3:
                        message.trades = reader.readBool();
                        break;
                    case 4:
                        message.summary = reader.readBool();
                        break;
                    case 5:
                        message.klines = reader.readPackedEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Config.deserialize(bytes);
        }
    }
    _Config_one_of_decls = new WeakMap();
    md.Config = Config;
})(exports.md || (exports.md = {}));
