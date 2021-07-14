import App from './App';
import MainView from './Main/MainView';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.start();

    const main = new MainView();
    main.render();

})