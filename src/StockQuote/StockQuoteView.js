import Marionette from 'backbone.marionette';
import template from './StockQuoteCard.html';
import _ from 'underscore';
import './StockQuoteCard.scss'

export const StockQuoteView = Marionette.View.extend({
    className: "stock-card",
    template: _.template(template),

    initialize: function() {
        _.bindAll(this, 'template')
    },

    formatMoney: function(value) {
        if (isNaN(parseInt(value))) {
            return value
        }

        return parseFloat(value).toFixed(2)
    },

    getArrowTopOffset: function(price, high, low) {
        const topMinOffset = 5;
        const barHeight = 95;
        const range = high - low;
        const valuePerPixel = barHeight / range;
        const topOffset = (high - price) * valuePerPixel;

        return `${topOffset + topMinOffset}px`;

    }
})