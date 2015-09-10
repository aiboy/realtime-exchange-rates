import './rates.css'
import './rates_content.css'
import './rates_title.css'
import './rates_table.css'
import './rates_row.css'
import './rates_column.css'
import './rates_lastupdate.css'

import RatesStore from './store.js'
import RatesViewModel from './viewmodel.js'
import RatesView from './view.js'

export default class Rates {
    init() {
        this.store = new RatesStore();
        this.viewmodel = new RatesViewModel();
        this.view = new RatesView();

        this.view.init();
        this.viewmodel.init();
        this.store.init();

        this.store.subscribe('update', this.viewmodel, 'onUpdate');
        this.viewmodel.subscribe('update', this.view, 'onUpdate');
    }
}
