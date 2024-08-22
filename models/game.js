const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    genre: String,
    platform: String,
    status: String
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
