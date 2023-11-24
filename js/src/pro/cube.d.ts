import cubeRest from '../cube.js';
import Client from '../base/ws/Client.js';
export default class cube extends cubeRest {
    describe(): any;
    onConnected(client: Client, message?: any): void;
    getCurrentUnixEpoch(): bigint;
    toLittleEndian64BitNumber(n: bigint): bigint;
    authenticate(url: any, params?: {}): Promise<any>;
    handleErrorMessage(client: Client, message: any): void;
    handleConnected(client: Client, message: any): any;
    handleMarketDataMessage(client: Client, message: any): any;
    handleTradeMessage(client: Client, message: any): void;
    handleMessage(client: Client, message: any): any;
    handleAuthenticate(client: Client, message: any): void;
    handleSubscription(client: Client, message: any): any;
}
