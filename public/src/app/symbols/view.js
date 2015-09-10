import AngularishView from './../helpers/angularishview.js'

export default class SymbolsView extends AngularishView {
    init() {
        this.viewName = 'symbols_content';
        this.template = `
            <table class="symbols_table" cellspacing="0">
                <tbody ng-loop="possibleSymbols">
                    <tr class="symbols_row" ng-class="state">
                        <td class="symbols_column" ng-text="type"></td>
                        <td class="symbols_column symbols_column__last">
                            <button class="button" ng-click="onAddClick">Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="symbols_controls" ng-show="haveSymbolsToAdd">
                <select ng-loop="baseSymbols" ng-change="onBaseSymbolChange">
                    <option ng-value="type" ng-text="value" ng-selected="selected"></option>
                </select>
                /
                <select ng-loop="targetSymbols" ng-change="onTargetSymbolChange">
                    <option ng-value="type" ng-text="value" ng-selected="selected"></option>
                </select>
                <button class="button" ng-click="onSymbolAddClick">Add</button>
            </div>
        `;
    }
    onAddClick(ctx) {
        this.fire('filter symbol added', ctx);
    }
    onBaseSymbolChange(ctx, event) {
        this.fire('base symbol change', event.target.value);
    }
    onTargetSymbolChange(ctx, event) {
        this.fire('target symbol change', event.target.value);
    }
    onSymbolAddClick() {
        this.fire('symbol add');
    }
}
