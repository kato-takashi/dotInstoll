var http =require("http"),
	fs = require('fs'),
	ejs = require('ejs'),
	qs = require('querystring');

var settings = require('./settings.js');
var server = http.createServer();
var template = fs.readFileSync('./public_html/bbs.ejs', 'utf-8');
var n = 0;
var posts = [];
function renderForm(posts, res){
	var data = ejs.render(template, {
			posts: posts
		});
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
}
server.on('request', function(req, res){
		if(req.method === 'POST'){
			req.data = "";
			req.on("readable", function(){
				req.data += req.read();
			});
			req.on("end", function(){
				var query = qs.parse(req.data);
				posts.push(query.name);
				renderForm(posts, res);
			});
		}else{
			renderForm(posts, res);
		}

});
server.listen(settings.port, settings.host);
console.log("server listening　http://127.0.0.1:8124....");