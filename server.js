// grab the packages/variables we need
var express = require('express');
var app = express();

var ig = require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));


// set view engine to ejs
app.set('view engine', 'ejs');


// set Instagram API access token
ig.use({access_token: '5548718897.1677ed0.ce02362dba1d4bdc9ef9b95f9500b408' });



// home page route to instagram images

app.get('/', function(req, res) {


ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {

res.render('pages/index', {grams: medias});    
    
    
});

});




// start the server

app.listen(8080);
console.log('App started! look at http://localhost:8080');


