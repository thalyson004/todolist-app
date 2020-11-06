const express = require('express');
const parser = require('body-parser');
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

var app = express();
app.set('view engine', 'ejs');
app.use( parser.urlencoded({extended:true}) );
app.use( express.static("public") );

var myList = [];

app.listen(3000, ()=>{
  console.log("I'm fine. Everything is ok. I'm in the port 3000.");
});

app.get('/', (req, res)=>{
  res.render( "list", {
    dayOfTheWeek: date.getDate(),
    todoList: myList,
  } );
});

app.post('/', (req, res)=>{
  myList.push( req.body.newTodo );
  res.redirect('/');
});

app.get('/about', (req, res)=>{
  res.render("about");
});
