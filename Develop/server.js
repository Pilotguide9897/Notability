const express = require('express');
const path = require('path');
const app = express();
const notes = require('./db/db.json');
const fs = require('fs');
const uuid = require('uuid');
const PORT = process.env.PORT || 5001;

app.use(express.static('public'));
app.use(express.json());

// HTML routes
    //Route for returning the notes.html file.
    app.get('/notes', (req, res) => {
        res.sendFile(__dirname + '/public/notes.html');
    });

// API routes
    // Route to fetch note data. Is working.
    // Corresponds to the 'getNotes' function in index.js
                // const getNotes = () =>
                // fetch('/api/notes', {
                // method: 'GET',
                // headers: {
                // 'Content-Type': 'application/json',
                //   },
                //  });

    app.get('/api/notes', (req, res) => {
        const filePath = path.join(__dirname,'db', 'db.json')
        fs.readFile(filePath, function(error, data) {
            if (error) {
                console.error(error);
                res.status(500).send('An error occurred while fetching the notes.');
            } else {
                const notes = JSON.parse(data);
                res.json(notes);
            }
        });
    });

    // Route to add new notes to the db.json file. Also working.
    // Corresponds to the 'saveNote' function in index.js.
            //  const saveNote = (note) =>
            //   fetch('/api/notes', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json',
            //   },
            //  body: JSON.stringify(note),
            // });
    app.post('/api/notes', (req, res) => {
        const id = uuid.v4();
        const newNote = { ...req.body, id }; // use the spread operator to create a new object that includes all the properties of the original req.body.
        const filePath = path.join(__dirname,'db', 'db.json');
        // First read the existing db.json file to get the previous notes.
        fs.readFile(filePath, function(error, data){
            if (error) {
                console.error(error);
                res.status(500).send('An error occurred while fetching the notes.');
            } else {
                const notes = JSON.parse(data);
                notes.push(newNote);
            
        fs.writeFile(filePath, /*need to re-stringify the data*/ JSON.stringify(notes), function(error) {
            if (error) {
                console.error(error);
                res.status(500).send('An error occurred while saving your note...')
            } else {
                res.status(201).send('Note successfully saved!');
            }
        });
        }
    });
});

// Route that deletes existing notes based on id. Also functioning.
        // const deleteNote = (id) =>
        //  fetch(`/api/notes/${id}`, {   // Should this not be /:${id}?
        //     method: 'DELETE',
        //     headers: {
        //     'Content-Type': 'application/json',
        //    },
        //  });
    app.delete('/api/notes/:id', (req, res) => {
        const filePath = path.join(__dirname,'db', 'db.json');
        fs.readFile(filePath, (error,data) => {
            if (error) {
                console.error(error);
                res.status(500).send('An error occurred while fetching the notes.');
            } else {
                const notes = JSON.parse(data);
                const idToDelete = req.params.id;             
                const filteredNotes = notes.filter(note => note.id !== idToDelete);

        fs.writeFile(filePath, JSON.stringify(filteredNotes), function(error){
            if (error) {
                console.error(error);
                res.status(500).send('An error occurred while updating your notes...')
            } else {
                res.status(204).send();
            }
        }) 
      }
    });
  });

// Route for returning the intex.html file.
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Listens for connection. Functioning.
app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}`);
});