import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NoteSchema = new Schema({
    title: {
        type : String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        default: ""
    },
    isViewed: {
        type: Boolean,
        default : false
    }

});