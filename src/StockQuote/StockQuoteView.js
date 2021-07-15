import Marionette from 'backbone.marionette';
import _ from 'underscore';
import template from './StockQuoteTemplate.html'
import {StockQuote} from "../_models/StockQuote";

export const StockQuoteView = Marionette.View.extend({
    //tagName: 'div',
    template: _.template(template),
})