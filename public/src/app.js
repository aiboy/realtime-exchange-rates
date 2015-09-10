import './app.css'

import Providers from './app/providers/index.js'
import Settings from './app/settings/index.js'
import Symbols from './app/symbols/index.js'
import Rates from './app/rates/index.js'
import Header from './app/header/index.js'
import Main from './app/main/index.js'
import Footer from './app/footer/index.js'
import Button from './app/button/index.js'


class App {
    init() {
        this.providers = new Providers();
        this.settings = new Settings();
        this.symbols = new Symbols();
        this.rates = new Rates();
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
        this.button = new Button();

        this.providers.init();
        this.settings.init();
        this.symbols.init();
        this.rates.init();
        this.header.init();
        this.main.init();
        this.footer.init();
        this.button.init();

        this.providers.viewmodel.subscribe('provider selected', this.rates.store, 'onProviderSelected');
        this.providers.viewmodel.subscribe('provider selected', this.settings.viewmodel, 'onProviderSelected');
        this.providers.viewmodel.subscribe('provider selected', this.symbols.viewmodel, 'onProviderSelected');

        this.settings.viewmodel.subscribe('rates refresh required', this.rates.store, 'onRatesRefreshRequired');

        this.rates.view.subscribe('remove symbol', this.symbols.viewmodel, 'onFilterSymbolRemoved');

        this.symbols.viewmodel.subscribe('filter symbols updated', this.rates.viewmodel, 'onFilterSymbolsUpdated');

        this.providers.store.fire('first load');
    }
}

!function() {

    var app = new App();
    if (__DEV__) {
        // we need to have app as global variable for debugging purposes
        window.app = app;
    }
    document.addEventListener('DOMContentLoaded', app.init.bind(app), false);

}();
