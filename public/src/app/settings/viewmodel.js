import Observer from './../helpers/observer.js'

export default class SettingsViewModel extends Observer {
    init() {
        this.intervalId = null;
        this.provider = null;
    }
    updateRate(refreshRate) {
        clearInterval(this.intervalId);

        if (typeof refreshRate === 'number') {
            if (isNaN(refreshRate)) {
                this.fire('update', {
                    name: this.provider.name,
                    refresh: false,
                    refreshInfo: 'NaN as refresh rate'
                });
            } else {
                this.intervalId = setInterval(() => this.fire('rates refresh required'), refreshRate);
            }
        } else {
            this.fire('rates refresh required');
        }
    }
    onProviderSelected(provider) {
        var doRefresh = provider.refreshIntervals && provider.refreshIntervals.length > 0;
        this.refreshRate = doRefresh ? provider.refreshIntervals[0] : null;

        this.fire('update', {
            name: provider.name,
            refresh: doRefresh,
            refreshRate: this.refreshRate,
            refreshInfo: provider.refreshInfo,
            refreshIntervals: provider.refreshIntervals && provider.refreshIntervals.map((interval)=> {
                return {
                    value: interval,
                    selected: interval === this.refreshRate
                }
            })
        })
    }
    onRefreshRateChanged(newRate) {
        this.refreshRate = newRate;
    }
    set refreshRate(rate) {
        if (this._rate !== rate) {
            this._rate = rate;
            this.updateRate(rate);
        }
    }
    get refreshRate() {
        return this._rate;
    }
}
