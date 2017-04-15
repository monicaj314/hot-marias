var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
<<<<<<< HEAD:hot-marias.js
app.use(express.static(__dirname, + '/assets'));

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});


// View curent reservations
app.get("/api/reservations", function (req, res) {
  res.json(reservations);
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function (req, res) {

  var newReservation = req.body;
  reservations.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
