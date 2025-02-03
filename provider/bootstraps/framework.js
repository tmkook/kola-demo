const app = require('kola/app');
const config = require('kola/config');

//public
const serve = require('koa-static');
app.use(serve(process.cwd() + '/public'));

//bodyparser
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

//logger
const logger = require('kola/logger');
app.prependListener('error', (stream) => {
    logger.error(stream.stack);
});
app.use((context, next) => {
    logger.http({ url: context.request.origin, method: context.request.method, ip: context.request.ip, proxy: context.request.ips });
    return next();
});

//database
const { sutando } = require('sutando');
const database = config.get('database', {});
sutando.addConnection(database.connections[database.default]);
for (let name in database.connections) {
    sutando.addConnection(database.connections[name], name);
}
