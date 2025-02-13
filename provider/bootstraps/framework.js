const { app, config, logger } = require('kola');

//error logging
app.prependListener('error', (stream) => {
    logger.error(stream.stack);
});

//access logging
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
