import mongoose from 'mongoose'

const book = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: String, required: false },
    resume: { type: String, required: true },
    year: { type: String, required: false },
    category: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
});

export const books = mongoose.model("books", book);