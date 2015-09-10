import ProvidersStore from './store.js'
import ProvidersViewModel from './viewmodel.js'
//import ProvidersView from './view.js'

export default class Providers {
    init() {
        this.store = new ProvidersStore();
        this.viewmodel = new ProvidersViewModel();
        //this.view = new ProvidersView();

        //this.view.init();
        this.viewmodel.init();
        this.store.init();

        this.store.subscribe('first load', this.store, 'onUpdate');
        this.store.subscribe('update', this.viewmodel, 'onUpdate');
        // providers have no view ( for now ) so we will deliberately comment it out
        //this.viewmodel.subscribe('update', this.view, 'onUpdate');
    }
}
