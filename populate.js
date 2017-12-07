import mongoose from 'mongoose';
import Music from './models/music';

const musics = [{
        title: 'Music1 test',
        duration: 180000,
        genre: ['Pop', 'Rock'],
        url: 'https://www.youtube.com/watch?v=VEpMj-tqixs'
    },
    {
        title: 'Music2 test',
        duration: 180000,
        genre: ['Folk', 'Rock'],
        url: 'https://www.youtube.com/watch?v=90mzH1kvznQ'
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