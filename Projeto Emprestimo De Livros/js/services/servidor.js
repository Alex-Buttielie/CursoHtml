vm  = this;
http = require('http');

vm.createRouter = createRouter;

function createRouter (port) {
	vm.api = {};
	vm.routes = {};
	vm.methods = ['GET', 'POST', 'OPTIONS'];
	vm.interceptors = [];

	vm.methods.forEach(function (method) {
		vm.routes[method] = {};
		vm.api[method.toLowerCase()] = function (path, fn) {
			vm.routes[method][path] = fn;
		};
	});

	vm.api.interceptor = function (interceptor) {
		vm.interceptors.push(interceptor);
	};

	vm.executeInterceptors = function (number, req, res) {
		vm.interceptor = vm.interceptors[number];
		if (!vm.interceptor) return;
		vm.interceptor(req, res, function () {
			vm.executeInterceptors(++number, req, res);
		});
	};

	vm.handleBody = function (req, res, next) {
		var body = [];
		req.on('data', function (chunk) {
			body.push(chunk);
		});
		req.on('end', function () {
			req.body = Buffer.concat(body).toString();
			next();
		});
	};

	http.createServer(function (req, res) {
		console.log(req.url);
		vm.handleBody(req, res, function () {
			vm.executeInterceptors(0, req, res);
			if (!vm.routes[req.method][req.url]) {
				res.statusCode = 404;
				return res.end();
			}
			vm.routes[req.method][req.url](req, res);
		});
	}).listen(port);

	return vm.api;
};

module.exports = vm.createRouter;