
//https://www.w3schools.com/js/js_json_arrays.asp
store = {
  "Posts": [
    { "name":"", "comment":[  ] },
    { "name":"", "comment":[  ] },
    { "name":"", "comment":[  ] },
    { "name":"", "comment":[  ] },
    { "name":"", "comment":[  ] },
    { "name":"", "comment":[  ] },
  ]
 }
//store.Posts[] får man name
//soter.Posts[0].comment[] får man alla kommentarer


module.exports = {
  getComments(req, res) {
    //console.log(store.Posts[0].comment[0])

    res.status(200).send(store.Posts[req.params.postId].comment);
  },
  addComment(req, res) {
    //Body är det man skriver i body på postman
    let newComments = req.body;

    let id = store.Posts[req.params.postId].comment.length;
    //store.Posts[req.params.postId].comment[id] = newComments;
    store.Posts[req.params.postId].comment.push(newComments);

    res.status(201).send({id: id});

  },
  updateComment(req, res) {
    //Gör post[id].comments[id] till det man skriver i body i postman
    store.Posts[req.params.postId].comment[req.params.commentId] = req.body;

    //Skriver ut det man uppdaterade
    res.status(200).send(store.Posts[req.params.postId].comment[req.params.commentId]);
  },
  removeComment(req, res) {
    //Tar bort Posts[id].comment[id] ur arrayen
    store.Posts[req.params.postId].comment.splice(req.params.commentId, 1);

    res.status(204).send();
  }
};
