const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('home', '/');
routes.add('login', '/login');
routes.add('itemList', '/item-list');
