var express = require('express'), 
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();

  var articles = [];

  app.use(bodyParser.urlencoded()); 
  app.set('view engine', 'ejs');

  app.get('/', function(req,res){
    res.render("site/index");
  });

  app.get('/articles/new', function(req, res){
    res.render('articles/new');
  });

  app.get('/articles', function(req,res){
    res.render("articles");
  });





  app.listen(3000), function(){
    console.log('Server has started!');
  };