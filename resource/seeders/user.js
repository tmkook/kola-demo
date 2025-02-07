/**
|--------------------------------------------------------------------------
| Model Migration
| Document https://sutando.org/zh_CN/guide/migrations.html
|--------------------------------------------------------------------------
|
*/
const { faker } = require('@faker-js/faker');
const secret = require('kola/secret');
const user = require('../../app/models/user');

module.exports = class user_seeder {
    factor() {
        return {
            avatar: faker.image.avatar(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            username: faker.internet.username(),
            password: secret.password('123456'),
        };
    }

    seeder() {
        user.query().create(this.factor());
    }
}