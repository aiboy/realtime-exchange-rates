import Observer from './../helpers/observer.js'

export default class ProvidersViewModel extends Observer {
    init() {
    }
    onUpdate(response) {
        if (response.data) {
            this.providers = response.data;
            var defaultProvider = this.providers.filter((provider) => provider.defaultProvider)[0];

            if (defaultProvider) {
                if (!this.selectedProvider) {
                    this.selectedProvider = defaultProvider;
                }
                this.fire('update', this.selectedProvider);
            } else {
                throw 'no default provider from server side';
            }

        } else {
            throw response.error;
        }
    }
    get selectedProvider() {
        return this._selectedProvider;
    }
    set selectedProvider(provider) {
        if (this._selectedProvider !== provider) {
            this._selectedProvider = provider;
            this.fire('provider selected', provider);
        }
    }
}
