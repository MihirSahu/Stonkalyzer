const finnhub = require('finnhub');


export const stock = (stock_symbol: string) => {

    /*
    c - Current price
    d - Change
    dp - Percent change
    h - High price of the day
    l - Low price of the day
    o - Open price of the day
    pc - Previous close price
    */

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cfaoctiad3i65pt1ir1gcfaoctiad3i65pt1ir20" // Replace this
    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.quote("AAPL", (error, data, response) => {
        if (error) {
            throw error;
        }
        console.log(data);
    });
}