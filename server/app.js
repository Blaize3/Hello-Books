const express = require("express");
const app = express();
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev'));


app.get("/", function(request, response){
	res.send("Welcome to Hello-Books.");
});

// This app allows users to create account 1
app.post("/api/users/signup", function(request, response){

});



// This app allows users to login to the application2
app.post("/api/user/signin", function(request, response){

});



// This app allows users add new 3
app.post("/api/books", function(request, response){

});


// Allow user to modify book 4
app.put("/api/books/:_id", function(request, response){

});


//allow user to get all the book in the library 5
app.get("/api/books", function(request, response){

});

// user view books he has not return 6
app.get("/api/books/:_id/books", function(request, response){

});


// This app allows users add new 7
app.post("/api/books", function(request, response){

});


// Allow user to modify book 8
app.put("/api/books/:_id", function(request, response){

});


app.listen(3000, function(){
	console.log("Server Started on 3000.");
});
