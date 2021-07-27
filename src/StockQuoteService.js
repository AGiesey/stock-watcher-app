import StockQuote from "@/models/StockQuote";

export default class {
    baseUrl = new URL('https://www.alphavantage.co/query');
    apiKey = 'HY0JP87WH3PG17X6';
    useMockApi;

    constructor(useMockApi = false) {
        this.useMockApi = useMockApi
    }

    mockStockSymbols = {
        IBM: 'IBM',
        GOOG: 'GOOG',
        AAPL: 'AAPL',
        GM: 'GM',
    }

    getGlobalQuoteBySymbol = (symbol) => {
        if (typeof symbol !== 'string' || symbol.length < 1) {
            throw new Error("symbol must be a string with a length greater than 0")
        }

        return this.useMockApi
            ? this.getMockedData(symbol)
            : this.getApiData(symbol);
    }

    getMockedData = (symbol) => {

        switch (symbol) {
            case this.mockStockSymbols.IBM:
                return new Promise(resolve => resolve(
                    {
                        "01. symbol": "IBM",
                        "02. open": "140.7200",
                        "03. high": "140.7500",
                        "04. low": "138.9273",
                        "05. price": "139.8200",
                        "06. volume": "4403752",
                        "07. latest trading day": "2021-07-14",
                        "08. previous close": "140.2800",
                        "09. change": "-0.4600",
                        "10. change percent": "-0.3279%"
                    }
                ))
            case this.mockStockSymbols.GOOG:
                return new Promise(resolve => resolve(
                    new StockQuote(
                        "GOOG",
                        "GOOG",
                        140.7200,
                        140.7500,
                        138.9273,
                        139.8200,
                        -0.4600,
                        "-0.3279%"
                    )
                ))
            case this.mockStockSymbols.AAPL:
                return new Promise(resolve => resolve(
                    {
                        "01. symbol": "AAPL",
                        "02. open": "140.7200",
                        "03. high": "140.7500",
                        "04. low": "138.9273",
                        "05. price": "139.8200",
                        "06. volume": "4403752",
                        "07. latest trading day": "2021-07-14",
                        "08. previous close": "140.2800",
                        "09. change": "-0.4600",
                        "10. change percent": "-0.3279%"
                    }
                ))
            case this.mockStockSymbols.GM:
            default:
                return new Promise(resolve => resolve(
                    {
                        "01. symbol": "GM",
                        "02. open": "140.7200",
                        "03. high": "140.7500",
                        "04. low": "138.9273",
                        "05. price": "139.8200",
                        "06. volume": "4403752",
                        "07. latest trading day": "2021-07-14",
                        "08. previous close": "140.2800",
                        "09. change": "-0.4600",
                        "10. change percent": "-0.3279%"
                    }
                ))
        }
    }

    getApiData = (symbol) => {
        let url = this.baseUrl
        url.search = new URLSearchParams({function: 'GLOBAL_QUOTE', symbol, 'apikey': this.apiKey} ).toString();

        return fetch(url.toString(), {method: 'GET'})
            .then(response => response.json())
            .then(x => {
                const globalQuote = x['Global Quote']
                console.log(globalQuote);
                if (typeof globalQuote === 'undefined' || !globalQuote["01. symbol"]){
                    throw new Error("Could not load stock quote data")
                }

                return new StockQuote(
                    globalQuote["01. symbol"],
                    globalQuote["01. symbol"],
                    globalQuote["02. open"],
                    globalQuote["03. high"],
                    globalQuote["04. low"],
                    globalQuote["05. price"],
                    globalQuote["09. change"],
                    globalQuote["10. change percent"]
                );
            })
    }
}