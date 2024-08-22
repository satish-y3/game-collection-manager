const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/gameCollectionDB', {
   
});


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Create Operation (Add New Games)
const Game = require('./models/game');

app.post('/addgame', async function(req, res) {
    const newGame = new Game({
        title: req.body.title,
        genre: req.body.genre,
        platform: req.body.platform,
        status: req.body.status
    });

    try {
        await newGame.save();  
        res.redirect('/');  
    } catch (err) {
        console.log(err);  
        res.status(500).send("Failed to save the game.");  
    }
});


// Read Operation (Display Games)
app.get('/', async function(req, res) {
    try {
        const games = await Game.find({});
        res.render('index', { gameList: games });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error retrieving games.");
    }
});


//Update Operation (Edit Game Details)

app.post('/updategame', async function(req, res) {
    const gameId = req.body.gameId;

    try {
        await Game.findByIdAndUpdate(gameId, {
            title: req.body.title,
            genre: req.body.genre,
            platform: req.body.platform,
            status: req.body.status
        });
        res.redirect('/');  
    } catch (err) {
        console.log(err);  
        res.status(500).send("Failed to update the game.");  
    }
});


// Delete Operation (Remove Games)

app.post('/deletegame', async function(req, res) {
    const gameId = req.body.gameId;

    try {
        await Game.findByIdAndDelete(gameId);  
        res.redirect('/');  
    } catch (err) {
        console.log(err);  
        res.status(500).send("Failed to delete the game.");  
    }
});

