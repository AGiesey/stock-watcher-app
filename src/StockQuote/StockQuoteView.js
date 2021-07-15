import Marionette from 'backbone.marionette';
import template from './StockCardTemplate.html';
import _ from 'underscore';

export const StockQuoteView = Marionette.View.extend({
    className: "stock-card",
    template: _.template(template)
})