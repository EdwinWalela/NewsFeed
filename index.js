// Declare global variables
var https = require('https')
var express = require('express')
var fs = require('fs');
var quote = require('./quotes');

// Read API key from text file (Synchronously)
var apiKey = fs.readFileSync('key.txt','utf8')
// Set port as  global
var port=process.env.PORT || 3000;

var app = express();
// Templating using EJS
app.set('view engine', 'ejs')

//Loading static files(stylesheet)
app.use('/public',express.static('public'));

//Routes
app.get('/',function(req,res){
	const request = https.get(`https://newsapi.org/v2/top-headlines?sources=next-big-future&apiKey=${apiKey}`, response => {
		let news = " " ;
		var dt = []
		var final = [] ;
		dt.push(quote.quote)
		if(response.statusCode === 200){
				response.on('data',info => {
					news += info.toString();
				})
				response.on('end',() => {
					news = JSON.parse(news);
					final.push(news)
					dt.push(final)
					res.render('index',{data:dt})
				})
		} else {
			res.render('index',{data:quote.quote})
		}
	})
})
app.get('/feed',function(req,res){
	let body = ""
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