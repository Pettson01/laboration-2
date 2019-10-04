const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const postsFunktioner = require('./routes/posts.js')
const commentsFunktioner = require('./routes/comments.js')

let app = express();


//Bodyparser är kanske onödig
app.use(bodyParser.text());
app.use(logger('dev'));
app.use(errorhandler());

/*
//Upplägg
//Skapar ett utrymme där man kan spara 'posts' och 'comments'
let store = {};
store.posts = [];
store.comments = [];
*/


//Till post
app.get('/posts', (req, res) =>{
  postsFunktioner.getPosts(req, res);
});

app.post('/posts', (req, res) =>{
  postsFunktioner.addPost(req, res);
});

//till posts/:postId/
app.put('/posts/:postId', (req, res) =>{
  postsFunktioner.updatePost(req, res);
});

app.delete('/posts/:postId', (req, res) =>{
  postsFunktioner.removePost(req, res);
});

//Kommentarer
//till /posts/:postId/comments
app.get('/posts/:postId/comments', (req, res) =>{
  commentsFunktioner.getComments(req, res);
});

app.post('/posts/:postId/comments', (req, res) =>{
  commentsFunktioner.addComment(req, res);
});

//till '/posts/:postId/comments/:commentId'
app.put('/posts/:postId/comments/:commentId', (req, res) =>{
  commentsFunktioner.updateComment(req, res);
});

app.delete('/posts/:postId/comments/:commentId', (req, res) =>{
  commentsFunktioner.removeComment(req, res);
});


app.listen(3000);
