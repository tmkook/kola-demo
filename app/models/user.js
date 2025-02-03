const { Model, SoftDeletes, compose } = require('sutando');

module.exports = class user extends compose(Model, SoftDeletes) {
    // ...
}
