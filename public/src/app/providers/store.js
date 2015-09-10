import fetch from './../helpers/fetch.js'
import config from './../../config.js'
import Observer from './../helpers/observer.js'

export default class ProvidersStore extends Observer {
    init() {

    }
    onUpdate() {
        var match = location.search.match(/\bprovider=(\w+)/) || [];
        var provider = match[1];
        var url;

        if (provider) {
            url = config.api_base + '/providers?provider=' + provider;
        } else {
            url = config.api_base + '/providers';
        }

        fetch(url).then((response) => {
            this.fire('update', response);
        }).fail((error) => {
            this.fire('update', error);
        })
    }
}
