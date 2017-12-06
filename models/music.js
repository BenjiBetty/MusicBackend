import mongoose, { Schema } from 'mongoose';

// Define movie schema
var musicSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    duration: Number,
    genre: Array,
    date: Date,
    url: String
});

// Export Mongoose model
export default mongoose.model('music', musicSchema);