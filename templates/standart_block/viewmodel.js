export default class {{name}}ViewModel {
    init() {

    }
    update(data) {
        this.view.update(data.map( (item) => {
            return { index: item }
        } ))
    }
}
