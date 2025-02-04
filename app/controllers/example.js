const controller = require('kola/controller');

module.exports = class example extends controller {
    index() {
        return 'hello world';
    }
}