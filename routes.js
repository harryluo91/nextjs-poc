const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('home', '/', 'home');
routes.add('login', '/login');
routes.add({
	name: 'items',
	pattern: '/items',
	page: 'items',
});
routes.add({
	name: 'itemDetails',
	pattern: '/items/:itemId',
	page: 'itemDetails',
});
