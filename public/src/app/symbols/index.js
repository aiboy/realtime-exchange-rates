import './symbols.css'
import './symbols_content.css'
import './symbols_title.css'
import './symbols_table.css'
import './symbols_row.css'
import './symbols_column.css'
import './symbols_controls.css'

import SymbolsStore from './store.js'
import SymbolsViewModel from './viewmodel.js'
import SymbolsView from './view.js'

export default class Symbols {
    init() {
        this.store = new SymbolsStore();
        this.viewmodel = new SymbolsViewModel();
        this.view = new SymbolsView();

        this.view.init();
        this.viewmodel.init();
        this.store.init();

        this.viewmodel.subscribe('update', this.view, 'onUpdate');
        this.view.subscribe('filter symbol added', this.viewmodel, 'onFilterSymbolAdded');
        this.view.subscribe('base symbol change', this.viewmodel, 'onBaseSymbolChange');
        this.view.subscribe('target symbol change', this.viewmodel, 'onTargetSymbolChange');
        this.view.subscribe('symbol add', this.viewmodel, 'onSymbolAdd');
    }
}
