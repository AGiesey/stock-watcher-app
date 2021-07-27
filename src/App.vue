
<script>
    import StockQuoteService from "@/StockQuoteService";
    import StockCard from "@/components/StockCard";

    export default {
        name: 'App',
        components: {
            StockCard
        },
        data() {
            return {
                stockQuotes: [],
                searchValue: '',
                errorMsg: '',
                service: new StockQuoteService(false)
            }
        },
        methods: {
            onStockSearch: function() {
                if (!this.searchValue) {
                    return;
                }

                this.service.getGlobalQuoteBySymbol(this.searchValue.toUpperCase())
                    .then(quote => {
                        this.stockQuotes.push(quote);
                        this.searchValue = '';
                    })
                    .catch(error => console.warn(error));
            }
        },
        mounted() {
            this.service.getGlobalQuoteBySymbol('GOOG')
                .then(quote => {
                    this.stockQuotes.push(quote);
                })
        }
    }
</script>

<template>
    <div id="app">
        <div class="container mt-5">
            <div class="row">
                <h1 class="page-header mt-1 mb-4">Stock Watcher</h1>
            </div>
            <div class="row stock-search-container">
                <div class="col-6 col-lg-4">
                    <div class="form-group">
                        <input type="text" placeholder="Enter Stock Symbol" v-model="searchValue" class="form-control">
                    </div>
                </div>
                <div class="col-6 col-lg-8">
                    <button class="btn btn-primary" v-on:click="onStockSearch">ADD STOCK</button>
                </div>
            </div>
            <div class="row stock-results-container d-flex">
                <div class="col d-flex">
                    <StockCard
                        v-for="(stockQuote, index) in stockQuotes"
                        v-bind:key="index"
                        v-bind="stockQuote"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "./variables.scss";


body {
    background: $light-gray;
}

.page-header {
    color: $dark-blue;
}


</style>
