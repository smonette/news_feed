var express = require('express'), 
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();
  
  app.use("/styles", express.static(__dirname + '/styles'));
  
  var articles = [
    { title: "10 Best Uses for Toothpaste", 
      author: "Jolene Blackbeard",
      text: "Bacon ipsum dolor sit amet tri-tip shankle tenderloin shoulder. Kevin sausage rump."
    },
    { title: "San Francisco Sportsball Team Wins",
      author: "Reggie Ryan",
      text: "Andouille venison hamburger rump, short loin corned beef pig brisket chicken. "}
  ];

  app.use(bodyParser.urlencoded()); 
  app.set('view engine', 'ejs');

  app.get('/', function(req,res){
    res.render("site/index");
  });

  app.get('/articles/new', function(req, res){
    res.render('articles/new');
  });

  app.get('/articles', function(req, res){
    res.render('articles/index', {articles: articles});
  });
 
   app.get('/articles/:id', function(req, res){
    var index = req.params.id;
    var article = articles[index];
    res.render("articles/show", {article:article});
                                // variable your ejs with access/key : the data/value
  });

  app.get('/about', function(req,res){
    res.render("site/about");
  });

  app.get('/contact', function(req,res){
    res.render("site/contact");
  });

  app.post('/articles', function(req,res){
    articles.push(req.body.article);
    res.redirect('/articles');
  });





  app.listen(3000), function(){
    console.log('Server has started!');
  };