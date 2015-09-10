import fetch from './../helpers/fetch.js'
import config from './../../config.js'
import Observer from './../helpers/observer.js'

export default class RatesStore extends Observer {
    init() {
        this.selectedProvider = null;
        this.failAttempts = 0;
    }
    onRatesRefreshRequired() {
        if (this.selectedProvider) {
            if (this.failAttempts > 3) {
                this.fire('update', {
                    data: {
                        lastRequest: 'more that 3 failed attempts to get rates for: ' + this.selectedProvider.name,
                        items: []
                    }
                });
            } else {
                fetch(config.api_base + '/rates/' + this.selectedProvider.slug).then((response) => {
                    this.fire('update', response);
                }).fail(() => {
                    this.failAttempts += 1;
                    this.fire('update', {
                        data: {
                            lastRequest: '...',
                            items: []
                        }
                    });
                })
            }

        } else {
            this.fire('update', 'cant refresh with null provider');
        }
    }
    onProviderSelected(provider) {
        this.selectedProvider = provider;
        this.failAttempts = 0;
    }
}
