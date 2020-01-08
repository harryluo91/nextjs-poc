const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('home', '/', 'home');
routes.add('login', '/login');
routes.add({
	name: 'item-list',
	pattern: '/item-list',
	page: 'itemList',
});
