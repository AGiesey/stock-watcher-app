export default class {
    name;
    symbol;
    open;
    high;
    low;
    price;
    change;
    changePercent;

    constructor(name, symbol, open, high, low, price, change, changePercent){
        this.name = name;
        this.symbol = symbol;
        this.open = open;
        this.high = high;
        this.low = low;
        this.price = price;
        this.change = change;
        this.changePercent = changePercent;
    }
}