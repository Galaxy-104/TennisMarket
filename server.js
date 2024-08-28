let http = require('http'); 
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse('http://localhost:8888/order?productId=1', true).query;

        route(pathname, handle, response, queryData.productId);

    }
    
    http.createServer(onRequest).listen(8888);
}
 
exports.start = start;