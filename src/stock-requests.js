const baseUrl = new URL('https://www.alphavantage.co/query');
const apiKey = 'HY0JP87WH3PG17X6'

const endpoints = {
    timeSeriesDaily: 'TIME_SERIES_DAILY',
    globalQuote: 'GLOBAL_QUOTE'
}

export const getStockGlobalQuoteReal = (symbol) => {
    if (typeof symbol !== 'string' || symbol.length < 1) {
        throw new Error('Symbol must be a string whose length is greater than 0')
    }

    return callFetch(symbol, endpoints.globalQuote)
}

export const getStockGlobalQuote = (symbol) => {
    switch (symbol){
        case 'IBM':
            return new Promise(resolve => {
                resolve(
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
                    }
                }
                )
            })
        case 'GOOG':
        default:
            return new Promise(resolve => {
                resolve(
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
                        }
                    }
                )
            })
    }
}

const callFetch = (symbol, endpoint) => {
    const params = [['function', endpoint], ['symbol', symbol], ['apikey', apiKey]]

    baseUrl.search = new URLSearchParams(params).toString();
    const url = baseUrl.toString();

    return fetch(url, { method: 'GET' })
        .then(response => response.json())
        .catch(error => console.error(error))
}