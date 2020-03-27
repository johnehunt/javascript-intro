// Simple Service that supports GET requests for use with
// The jQuery ajax example
const express = require("express");
const app = express();
const port = 3000;

// Allow for CORS as we are acssing the server from
// file store located HTMNL pages
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Now configure the server to encode POST body
app.use(express.urlencoded());

// Set up the get request processing
app.get("/", function(req, res) {
  console.log('Handling GET request');
  let data = {
    plays: [
      {
        name: "Hamlet",
        date: "1599 approx.",
        category: "tragedy",
        synopsis:
          "The play presents how Prince Hamlet exacts revenge on his uncle Claudius, " +
          "who has murdered Hamlet's father, the King, and then taken the throne and married " +
          "Gertrude, Hamlet's mother."
      },
      {
        name: "Twelfth Night",
        date: "1599",
        category: "Comedy",
        synopsis: "Comedy of confused identities with Malvolio, Viola, Maria and Orsino."
      }
    ]
  };

  res.json(data);
});

// Set up the post request processing
app.post("/", function(req, res) {
  console.log('Handling POST request:');
  const title = req.body.title;
  console.log('Looking for - ' + title);
  const play = {
    name: title,
    date: "2019",
    category: "Comedy",
    synopsis: "A new comedy about " + title
  };
  res.json(play)
});

// Run the server
app.listen(port, err => {
  console.log("Setting up plays server");

  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
