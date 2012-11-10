var express = require('express')
  , textile = require('textile-engine')
  , app = express();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('textile', textile.renderFile);
  app.use(express.logger());
});

app.get('/', function(req, res){
  res.render('index.textile');
});

app.listen(3000);
