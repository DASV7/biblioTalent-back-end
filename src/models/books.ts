import mongoose from 'mongoose'

const book = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    urlImage: { type: String, required: true },
    status: { type: Boolean, required: false },
    whoHave: { type: mongoose.Types.ObjectId, ref: "users", require: false },
    date_register: { type: Date, required: true, default: Date.now },
});

export const books = mongoose.model("books", book);