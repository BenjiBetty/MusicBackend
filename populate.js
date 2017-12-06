import mongoose from 'mongoose';
import Music from './models/music';

const musics = [{
        title: 'Music1 test',
        duration: 250,
        genre: ['Pop', 'Rock'],
    },
    {
        title: 'Music2 test',
        duration: 350,
        genre: ['Folk', 'Rock'],
    },

];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/musics');

// Go through each movie
musics.map(data => {
    // Initialize a model with movie data
    const music = new Music(data);
    // and save it into the database
    music.save();
});