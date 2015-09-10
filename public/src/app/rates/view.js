import AngularishView from './../helpers/angularishview.js'

export default class RatesView extends AngularishView {
    init() {
        this.viewName = 'rates_content';
        this.template = `
            <div class="rates_lastupdate">Last Update From Server: <span ng-text="lastUpdate"></span></div>
            <table class="rates_table" cellspacing="0">
                <tbody ng-loop="data">
                    <tr class="rates_row">
                        <td class="rates_column" ng-text="type"></td>
                        <td class="rates_column" ng-text="ask"></td>
                        <td class="rates_column" ng-text="bid"></td>
                        <td class="rates_column rates_column__last">
                            <button class="button" ng-click="onRemoveClick">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    onRemoveClick(ctx) {
        this.fire('remove symbol', ctx.type);
    }
}
