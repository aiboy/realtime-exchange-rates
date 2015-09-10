import Observer from './../helpers/observer.js'

export default class RatesViewModel extends Observer {
    init() {
        this._filterSymbols = [];
        this.lastResponse = null;
    }
    onUpdate(response) {
        this.lastResponse = response;

        this.fire('update', {
            lastUpdate: response.data.lastRequest,
            data: response.data.items.filter((rate) => this._filterSymbols.indexOf(rate.type) > -1)
        });
    }
    onFilterSymbolsUpdated(symbols) {
        this._filterSymbols = symbols;
        if (this.lastResponse) {
            this.onUpdate(this.lastResponse);
        }
    }
}
