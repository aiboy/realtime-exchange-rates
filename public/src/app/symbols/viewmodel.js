import Observer from './../helpers/observer.js'
import locale from './../../locale.js'

export default class SymbolsViewModel extends Observer {
    init() {
        this._filterSymbols = [];
        this._possibleSymbols = [];
        this._lastBaseSymbol = null;
        this._lastTargetSymbol = null;
        this._baseSymbols = [];
        this._targetSymbols = [];
    }
    onFilterSymbolRemoved(type) {
        var index = this._filterSymbols.indexOf(type);
        // there is an easy method to remember witch method to use splice or slice
        this._filterSymbols.splice(index, 1);
        this.fire('filter symbols updated', this._filterSymbols);

        this.update();
    }
    onFilterSymbolAdded(symbol) {
        if (this._filterSymbols.indexOf(symbol.type) < 0) {
            this._filterSymbols.push(symbol.type);
        }
        this.fire('filter symbols updated', this._filterSymbols);

        this.update();
    }
    onProviderSelected(provider) {
        this.fire('filter symbols updated', this._filterSymbols);

        this._baseSymbols = provider.supportedBaseCurrency.map(function(type) {
            return {
                value: locale[type],
                type: type
            }
        });
        this._lastBaseSymbol = this._baseSymbols[0];

        this._targetSymbols = provider.supportedTargetCurrency.map(function(type) {
            return {
                value: locale[type],
                type: type
            }
        });
        this._lastTargetSymbol = this._targetSymbols.filter((symbol) => symbol.type !== this._lastBaseSymbol.type)[0];
        this._lastBaseSymbol = this._baseSymbols.filter((symbol) => symbol.type !== this._lastTargetSymbol.type)[0];

        this._lastTargetSymbol.selected = true;
        this._lastBaseSymbol.selected = true;

        this.update();
    }
    update() {
        this._possibleSymbols.forEach((symbol) => {
            if (this._filterSymbols.indexOf(symbol.type) > -1) {
                symbol.state = 'symbols_row__disabled';
            } else {
                symbol.state = 'symbols_row__enabled';
            }
        });

        var base = this._baseSymbols.filter((symbol) => symbol.type !== this._lastTargetSymbol.type);
        var target = this._targetSymbols.filter((symbol) => symbol.type !== this._lastBaseSymbol.type);

        this.fire('update', {
            haveSymbolsToAdd: true,
            baseSymbols: base,
            targetSymbols: target,
            possibleSymbols: this._possibleSymbols
        })
    }
    onBaseSymbolChange(type) {
        var symbol = this._baseSymbols.filter((symbol) => symbol.type === type)[0];

        this._lastBaseSymbol.selected = false;
        this._lastBaseSymbol = symbol;
        this._lastBaseSymbol.selected = true;
        this.update();
    }
    onTargetSymbolChange(type) {
        var symbol = this._targetSymbols.filter((symbol) => symbol.type === type)[0];

        this._lastTargetSymbol.selected = false;
        this._lastTargetSymbol = symbol;
        this._lastTargetSymbol.selected = true;
        this.update();
    }
    onSymbolAdd() {
        if (!this._possibleSymbols.some((symbol) => symbol.type === (this._lastBaseSymbol.type + this._lastTargetSymbol.type))) {
            this._possibleSymbols.push({
                type: this._lastBaseSymbol.type + this._lastTargetSymbol.type,
                state: 'symbols_row__enabled'
            });
            this.update();
        }
    }
}
