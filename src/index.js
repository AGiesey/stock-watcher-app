import MainView from './Main/MainView';
import Marionette from 'backbone.marionette';
import './style.scss';
import {getGlobalQuoteBySymbol} from "./StockQuote/StockQuoteService";
import {createFromGlobalQuote, StockQuoteCollection} from "./StockQuote/StockQuoteModel";
import {StockQuoteCollectionView} from "./StockQuote/StockQuoteCollectionView";

document.addEventListener('DOMContentLoaded', async () => {
    const StockWatcherApp = new Marionette.Application();
    StockWatcherApp.start();

    new MainView().render();

    const globalQuotes = await Promise.all(
        ['IBM', 'GOOG', 'AAPL', 'GM']
            .map(getGlobalQuoteBySymbol)
    )

    const stockQuoteCollection = new StockQuoteCollection(globalQuotes.map(createFromGlobalQuote));

    new StockQuoteCollectionView({el: '#stock-quotes', collection: stockQuoteCollection}).render()
})