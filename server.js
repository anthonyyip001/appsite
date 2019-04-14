var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname));



app.get("/", function(req, res) {
	res.render("index.html");
})

app.get("/hidden", function(req, res) {
	res.sendFile(__dirname+"/hidden.html");
})

app.get("/about", function(req, res) {
	res.sendFile(__dirname+"/about.html");
})

app.get("/partners", function(req, res) {
	res.sendFile(__dirname+"/partners.html");
})

app.get("/contact", function(req, res) {
	res.sendFile(__dirname+"/contact.html");
})
app.post("/submit", function(req, res) {
	const email = req.body.email
	
	
	res.sendFile(__dirname+"/index.html");
})



app.listen(port, function() {
	console.log("app running");
})