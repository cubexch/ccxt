import Exchange from './abstract/cube.js';
/**
 * @class cube
 * @extends Exchange
 */
export default class cube extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchAssets(): Promise<boolean>;
}
