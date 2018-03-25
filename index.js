

var https = require('https')
var express = require('express')
var app = express();
var fs = require('fs');
var quote = require('./quotes');
var port=Number(process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.use('/public',express.static('public'));

// Read API key from text file (Synchronously)
var apiKey = fs.readFileSync('key.txt','utf8')

//Routes
app.get('/',function(req,res){
	res.render('index',{data:quote.quote})
})
app.get('/feed',function(req,res){
	var body = ""
	const request= https.get(`https://newsapi.org/v2/top-headlines?sources=${req.query.source}&apiKey=${apiKey}`,response =>{
		if(response.statusCode===200){
			response.on('data',data => {
				body += data.toString();
			})
			response.on('end',() => {
				body = JSON.parse(body)
				res.render('feed',{
					data:body.articles
				});
			})
		}else{
		res.send('failed to load news');
		}
	})
})



console.log('listening to port 3000')
app.listen(port)