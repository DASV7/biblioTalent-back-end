import { books } from "../../models/books"
import { information } from "../../utils/queryOptions"


export const createBook = async (req, res) => {
    try {
        const existsBook = await books.find({ name: req.body.name })
        if (existsBook && existsBook.length) throw new Error("El nombre ya esta registrado")
        const book = new books({ ...req.body })
        const bookNew = await book.save()
        res.status(200).json({ information: bookNew, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};

export const getBooksByFilter = async (req, res) => {
    try {
        const { search, category } = req.query
        const book = await books.find({})
        res.status(200).json({ information: JSON.parse(JSON.stringify(book)), error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};
