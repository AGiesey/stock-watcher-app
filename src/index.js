import MainView from './Main/MainView';
import Marionette from 'backbone.marionette';
import './style.scss';
import {getGlobalQuoteBySymbol} from "./StockQuote/StockQuoteService";
import {createFromGlobalQuote} from "./StockQuote/StockQuoteModel";
import {StockQuoteView} from "./StockQuote/StockQuoteView";

document.addEventListener('DOMContentLoaded', () => {
    const StockWatcherApp = new Marionette.Application();
    StockWatcherApp.start();

    const main = new MainView();
    main.render();

    const symbol = getGlobalQuoteBySymbol('IBM');
    const model = createFromGlobalQuote(symbol);
    const stockQuoteItem = new StockQuoteView({el: '#stock-quotes', model: model}).render();

})