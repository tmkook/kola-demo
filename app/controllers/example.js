const controller = require('kola/controller');
const view = require('kola/view');

module.exports = class example extends controller {
    index() {
        return view.file('welcome');
    }
}