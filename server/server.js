const express = require("express");
const app = express();
const posts = require("./posts");
const users = require("./users");

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res, next) => {
  //res.send(users);
  //call a async API
});

const userPostsMiddleware = (req, res, next) => {
  // Extract user ID from request URL
  const userId = req.params.userId; // Assuming userId is a parameter in the route

  // Check if the request URL matches the pattern
  if (req.url === `/users/${userId}/posts`) {
    // If it matches, do something...
    console.log("Middleware for /users/{{userId}}/posts route");
  }

  // Call next to move to the next middleware or route handler
  next();
};

app.get("/users/:userId/posts", userPostsMiddleware);

app.listen(3000);
