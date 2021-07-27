<script>
    export default {
        props: {
            name: String,
            symbol: String,
            open: String,
            high: String,
            low: String,
            price: String,
            change: String,
            changePercent: String,
        }
    }
</script>

<template>
    <div class="stock-card">
        <div class="stock-card-left">
            <div class="arrow"> > </div>
            <div class="vertical-bar"></div>
            <div class="labels-container">
                <p class="price price-high">{{ high }}</p>
                <p class="price price-low">{{ low }}</p>
            </div>
        </div>
        <div class="stock-card-right">
            <h3>{{ name }}</h3>
            <p class="stock-symbol-label">{{ symbol }}</p>
            <p class="stock-price">{{ price }} <span>^ {{ change }} ({{ changePercent }}%)</span></p>
            <p class="stock-recent-performance">
                <span>OPEN {{ open }}</span>
                <span>HIGH {{ high }}</span>
                <span>LOW {{ low }}</span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../variables.scss";

.stock-card {
    display: flex;
    margin: 5px;
    background: white;

    p {
        margin-bottom: 0;
    }

    h3 {
        font-size: 1.1em;
        color: $dark-blue;
        text-transform: uppercase;
        margin-bottom: 0;
    }
}

.stock-card-left {
    width: 60px;
    background: $bright-green;
    display: flex;
    align-items: center;

    .price {
        color: white;
        font-size: .5em;
        font-size: .5em;
    }
}

.arrow {
    font-weight: bold;
    color: white;
    margin-left: 15px;
}

.vertical-bar {
    height: 90%;
    width: 2px;
    background: white;
}


.stock-card-right {
    flex-grow: 1;
    padding: 10px;
}

.stock-symbol-label {
    font-size: 0.8em;
    text-transform: uppercase;
    line-height: .7em;
    color: $charcoal;
}

.stock-price {
    font-size: 1.3em;
    color: $dark-blue;
    margin-top: 5px;

    span {
        font-size: .5em;
        color: $bright-green;
    }
}

.stock-recent-performance {
    color: $charcoal;
    font-size: .6em;

    span {
        margin-right: 5px;
    }
}
</style>