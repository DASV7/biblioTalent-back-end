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

export const lendBook = async (req, res) => {
    try {
        const { id } = req.body
        let data: any;
        if (!id) data = await books.find({ status: true })
        else data = await books.find({ status: true, whoHave: id })
        res.status(200).json({ information: data, error: false });
    } catch (error) {
        console.log("Papá a Buscar el error", error.message)
        res.status(500).json({ message: error.message, error: true });
    }
}

export const lendBookUser = async (req, res) => {
    try {
        const existsBook = await books.find({ name: req.body.name })
        if (existsBook && existsBook.length) throw new Error("El libro ya esta prestado")
        const book = new books({ ...req.body })
        const bookNew = await book.save()
        res.status(200).json({ information: bookNew, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.body
        let data = await books.findOne(req.body)
        if (data["whoHave"] || data["status"]) throw new Error("El Libro se encuentra Prestado ")
        let deleteUser = await books.deleteOne(req.body)
        res.status(200).json({ information: deleteUser, error: false });
    } catch (error) {
        console.log("Papá a Buscar el error", error.message)
        res.status(500).json({ message: error.message, error: true });
    }
}



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

export const editBoookById = async (req, res) => {
    try {
        const id = req.body._id
        delete req.body._id
        const editUser = await books.updateOne({ _id: id }, req.body)
        res.status(200).json({ information: { _id: id, ...req.body }, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};
