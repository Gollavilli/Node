var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res){
    res.send("bye ");
});



app.get("/r/:id", function(req, res){
    var x= req.params.id;
    res.send("hello"* x);
});

app.get("/r/:subreddit/comments/:id", function(req, res){
    var x= req.params.id;
    res.send("you are in comments "+ x);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server start");
});