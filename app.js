var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var load = require('express-load');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(require('method-override')());

app.set('port', (process.env.PORT || 4010));

load('controllers', {cwd: 'app'})
    .then('routes')
    .into(app);

app.listen(app.get('port'), function(){
  console.log("Servidor rodando na porta " + app.get('port'));
})
