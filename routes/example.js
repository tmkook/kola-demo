/**
|--------------------------------------------------------------------------
| Application Routes
| Document https://github.com/koajs/router/blob/master/API.md
|--------------------------------------------------------------------------
| example: router.get(name, path, ...middleware, controller);
| controller: router.action(filename,method)
| middleware: router.next(filename)
|--------------------------------------------------------------------------
|
*/
const router = require('kola/router');

// Define routes
router.get('/', router.action('example', 'index'));
router.get('/auth',router.next('auth'), router.action('example', 'index'));