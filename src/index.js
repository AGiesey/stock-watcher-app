import App from './App';
import MainView from './Main/MainView';
import { getStockGlobalQuote } from "./stock-requests";
import './style.scss';
import {createFromGlobalQuote, StockQuoteCollection} from "./_models/StockQuote";
import {StockQuoteView} from "./StockQuote/StockQuoteView";


const defaultStockSymbols = [
    'IBM',
    'GOOG',
    'YHOO',
    'GRPN'
]

document.addEventListener('DOMContentLoaded',async () => {
    const app = new App();
    app.start();

    const main = new MainView();
    main.render();

    const stockQuoteModel = await getStockGlobalQuote('IBM');
    const model = createFromGlobalQuote(stockQuoteModel)

    const StockQuote = new StockQuoteView({el: '#stock-results', model: model}).render();

    const initialRequests = defaultStockSymbols.map(getStockGlobalQuote);

    // let stockQuotes = Promise.all(initialRequests)
    //     .then(data => {
    //         console.log('DATA', data)
    //         data.map(createFromGlobalQuote)
    //     });
    //
    // console.log('StockQuote', stockQuotes)
    //
    // const stockQuotesCollection = new StockQuoteCollection(stockQuotes)
    //
    // console.log('Collection', JSON.stringify(stockQuotesCollection));
})