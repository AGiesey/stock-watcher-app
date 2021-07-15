import Backbone from 'backbone';

export const StockQuote = Backbone.Model.extend({
    idAttribute: 'symbol',
    defaults: {
        high: 0,
        open: 0,
        low: 0,
        price: 0,
        change: 0,
        changePercent: ""
    }
})

export const StockQuoteCollection = Backbone.Collection.extend({
    model: StockQuote
})

export const createFromGlobalQuote = (globalQuote) => {
    return new StockQuote({
        symbol: globalQuote["01. symbol"],
        high: globalQuote["03. high"],
        low: globalQuote["04. low"],
        open: globalQuote["02. open"],
        price: globalQuote["05. price"],
        change: globalQuote["09. change"],
        changePercent: globalQuote["10. change percent"],
    })
}

/**
{
"Global Quote": {
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
}}
 */