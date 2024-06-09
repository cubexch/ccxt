from ccxt.base.types import Entry


class ImplicitAPI:
    public_get_ir_v0_markets = publicGetIrV0Markets = Entry('ir/v0/markets', 'public', 'GET', {})
    public_get_test = publicGetTest = Entry('test', 'public', 'GET', {})
