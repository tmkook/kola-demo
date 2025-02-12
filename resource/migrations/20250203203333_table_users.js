/**
|--------------------------------------------------------------------------
| Model Migration
| Document https://sutando.org/zh_CN/guide/migrations.html
|--------------------------------------------------------------------------
|
*/
const { sutando } = require('sutando');
const schema = sutando.schema('default');
module.exports = class users {
    async up() {
        await schema.createTable('users', (table) => {
            table.increments('id');
            table.string('avatar');
            table.string('phone', 32);
            table.string('email', 32);
            table.string('username', 32);
            table.string('password');
            table.timestamp('email_at').nullable();
            table.timestamp('phone_at').nullable();
            table.timestamps();
            table.timestamp('deleted_at').nullable();
        });
    }

    async down() {
        await schema.dropTableIfExists('users');
    }
}