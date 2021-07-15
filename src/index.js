import MainView from './Main/MainView';
import Marionette from 'backbone.marionette';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const StockWatcherApp = new Marionette.Application();
    StockWatcherApp.start();

    const main = new MainView();
    main.render();

})