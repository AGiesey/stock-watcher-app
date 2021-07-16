import Marionette from 'backbone.marionette';
import template from './StockQuoteCard.html';
import _ from 'underscore';
import './StockQuoteCard.scss'

export const StockQuoteView = Marionette.View.extend({
    className: "stock-card",
    template: _.template(template)
})