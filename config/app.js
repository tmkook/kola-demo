module.exports = {
    koa: {
        env: 'development',
        keys: ['your-cookie-secret'],
        proxy: true,
        subdomainOffset: 2,
        proxyIpHeader: 'X-Forwarded-For',
        maxIpsCount: 1,
    },
    router: {
        host: null,
        prefix: '',
        exclusive: false,
    },
    session: {
        key: 'sessionid',
        maxAge: 3600000,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: true,
        store: null,
    },
    logger: {
        level: "info",
        silent: false,
        transports: [
            { filename: process.cwd() + "/storage/logs/kola.log", maxSize: '50m', maxFiles: 7, zippedArchive: true }
        ]
    },
}