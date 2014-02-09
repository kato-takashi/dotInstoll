//post.js
var posts = [
	{title:'title0', body: 'body0'},
	{title:'title1', body: 'body1'},
	{title:'title2', body: 'body2'},
	{title:'title3', body: 'body3'}
];
exports.index = function(req, res){
	res.render('posts/index.ejs', {posts: posts});
};
exports.show = function(req, res){
	res.render('posts/show.ejs', {post: posts[req.params.id]});
};
exports.new = function(req, res){
	res.render('posts/new.ejs');
};
exports.create = function(req, res){
	var post = {
		title: req.body.title,
		body: req.body.body
	};
	posts.push(post);
	res.redirect('/');

};
exports.edit = function(req, res){
	res.render('posts/edit.ejs', {post:posts[req.params.id], id: req.params.id});
};

exports.update = function(req, res, next){
	if(req.body.id != req.params.id){
		next(new Error('ID not valid'));
	}else{
		posts[req.body.id]={
		title: req.body.title,
		body: req.body.body
	}
		res.redirect('/');
	}
	
};

exports.destroy = function(req, res, next){
	if(req.body.id != req.params.id){
		next(new Error('ID not valid'));
	}else{
		posts.splice(req.body.id, 1);
		res.redirect('/');
	}
	
};