var posts = { id: 4, title: "New Post"};
var comments = [
  { postId: 4, content: "Great job!" },
  { postId: 3, content: "No interest" },
  { postId: 3, content: "I agree" }, 
  { postId: 4, content: "wow!" }
];

function commentsForPost(posts, comments){
  return comments.filter(function(comment){
    return comment.postId === posts.id;
  });
}
commentsForPost(posts, comments);

=> [ { postId: 4, content: 'Great job!' },
  { postId: 4, content: 'wow!' } ]
   
