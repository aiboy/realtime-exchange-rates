import './settings.css'
import './settings_content.css'
import './settings_select.css'
import './settings_title.css'
import './settings_info.css'
import './settings_provider.css'

import SettingsStore from './store.js'
import SettingsViewModel from './viewmodel.js'
import SettingsView from './view.js'

export default class Settings {
    init() {
        this.store = new SettingsStore();
        this.viewmodel = new SettingsViewModel();
        this.view = new SettingsView();

        this.view.init();
        this.viewmodel.init();
        this.store.init();

        this.viewmodel.subscribe('update', this.view, 'onUpdate');
        this.view.subscribe('refresh rate changed', this.viewmodel, 'onRefreshRateChanged');
    }
}
