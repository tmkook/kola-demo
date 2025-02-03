const app = require('kola/app');
const router = require('kola/router');
const program = require('kola/command');

program.command('serve')
    .description('Start server')
    .argument('[port]', 'Server Port', '3000')
    .action(function (port) {
        app.use(router.routes()).use(router.allowedMethods());
        app.listen(port, function () {
            console.log('Server Port: ' + port + ' Started...');
        });
    });