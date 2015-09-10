import {{name}}Controller from './controller.js'
import {{name}}Store from './store.js'
import {{name}}ViewModel from './viewmodel.js'
import {{name}}View from './view.js'

export default class {{name}} {
    init() {
        this.controller = new {{name}}Controller();
        this.controller.store = new {{name}}Store();
        this.controller.store.viewmodel = new {{name}}ViewModel();
        this.controller.store.viewmodel.view = new {{name}}View();

        this.controller.store.viewmodel.view.init();
        this.controller.store.viewmodel.init();
        this.controller.store.init();
        this.controller.init();
    }
}
