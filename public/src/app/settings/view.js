import AngularishView from './../helpers/angularishview.js'

export default class SettingsView extends AngularishView {
    init() {
        this.viewName = 'settings_content';
        this.template = `
            <div class="settings_provider" ng-text="name"></div>
            <div ng-show="refresh">
                <span>Data refresh period:</span>
                <select class="settings_select" ng-loop="refreshIntervals" ng-change="onRefreshRateChange">
                    <option ng-value="value" ng-text="value" ng-selected="selected"></option>
                </select>
            </div>
            <div ng-hide="refresh">
                <span class="settings_info" ng-text="refreshInfo"></span>
            </div>
        `;
    }
    onRefreshRateChange(ctx, event) {
        var target = event.target;
        this.fire('refresh rate changed', +target.value);
    }
}
