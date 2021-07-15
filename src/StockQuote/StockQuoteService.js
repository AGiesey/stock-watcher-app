const baseUrl = new URL('https://www.alphavantage.co/query');
const apiKey = 'HY0JP87WH3PG17X6';

export const getGlobalQuoteBySymbol = (symbol) => {
    if (typeof symbol !== 'string' || symbol.length < 1) {
        throw new Error("symbol must be a string with a length greater than 0")
    }

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
}