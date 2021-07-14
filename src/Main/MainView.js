import Marionette from 'backbone.marionette';
import template from './MainTemplate.html';
import _ from 'underscore';

const MainView = Marionette.View.extend({
    tagName: 'div',
    el: '#app',
    template: _.template(template),

    onRender() {
        console.log('Main Rendered');
    }

})

export default MainView;