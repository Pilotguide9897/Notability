const express = require('express');
const path = require('path');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 5001;

app.use(express.static('public'));

//HTML routes
    // Route for returning the notes.html file
    app.get('/notes', function(req, res) {
        res.sendFile(__dirname + '/public/notes.html');
    });

    // Route for 
    app.get('*', function(req,res){
        res.sendFile(__dirname + '/public/index.html');
    });

// API routes
    app.get();

    app.post();

// Listens for connection.
app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}`);
});