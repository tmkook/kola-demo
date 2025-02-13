const { controller, view } = require('kola');

module.exports = class example extends controller {
    index() {
        return view.file('welcome');
    }
}