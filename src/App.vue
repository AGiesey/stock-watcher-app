
<script>
    import StockCard from "@/stock-card/StockCard";
    export default {
        name: 'App',
        components: {
            StockCard
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
        <div class="col-3">
          <div class="form-group">
            <input type="text" placeholder="Enter Stock Symbol" class="form-control">
          </div>
        </div>
        <div class="col-2">
          <button class="btn btn-primary">ADD STOCK</button>
        </div>
      </div>
      <div class="row stock-results-container d-flex">
        <div class="row">
          <div class="col d-flex">

            <StockCard />
          </div>
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
