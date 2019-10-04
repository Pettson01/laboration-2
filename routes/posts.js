
//Upplägg
//Skapar ett utrymme där man kan spara 'posts' och 'comments'
const express = require('express');

let app = express();


var store = {};
store.posts = [];

module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts);
  },
  addPost(req, res) {
    //Body är det man skriver i body i postman
    let newPosts = req.body;

    let id = store.posts.length;

    store.posts.push(newPosts);

    res.status(201).send({id: id});

  },
  updatePost(req, res) {
    //Byter ut posten med id 'req.params.id' till det som man skriver i body
    //Kommer ta ut ':id' ur url som blir inmatad
    store.posts[req.params.postId] = req.body;

    //Skicakr tillbaka det nya posten
    res.status(200).send(store.posts[req.params.postId]);
  },
  removePost(req, res) {
    store.posts.splice(req.params.postId, 1);
    res.status(204).send();

  }
};
