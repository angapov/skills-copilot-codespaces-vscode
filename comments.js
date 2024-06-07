// Create web server
// This is the main file of the server. It creates the server and defines the routes to be handled.
// It also defines the port number to listen to.

// Dependencies
const express = require('express');
const app = express();
const comments = require('./comments.js');

// Port Number
const port = 3000;

// Routes
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

app.get('/comments/:id', (req, res) => {
    res.send(comments.getComment(req.params.id));
});

app.post('/comments', (req, res) => {
    res.send(comments.addComment(req.body));
});

app.put('/comments/:id', (req, res) => {
    res.send(comments.updateComment(req.params.id, req.body));
});

app.delete('/comments/:id', (req, res) => {
    res.send(comments.deleteComment(req.params.id));
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;