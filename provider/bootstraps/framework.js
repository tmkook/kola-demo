const app = require('kola/app');
const config = require('kola/config');

//error handler
const logger = require('kola/logger');
app.prependListener('error', (stream) => {
    logger.error(stream.stack);
});

//access handler
app.use((context, next) => {
    logger.http({ url: context.request.origin, method: context.request.method, ip: context.request.ip, proxy: context.request.ips });
    return next();
});

//database
const { sutando } = require('sutando');
const database = config.get('database', {});
for (let name in database) {
    sutando.addConnection(database[name], name);
}
