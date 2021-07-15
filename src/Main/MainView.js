import Marionette from 'backbone.marionette';
import template from './MainTemplate.html';
import _ from 'underscore';

const MainView = Marionette.View.extend({
    template: _.template(template),
    el: '#app'

})

export default MainView;