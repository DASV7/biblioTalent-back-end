import { users } from "../../models/users"
import { information } from "../../utils/queryOptions"


export const createNewUser = async (req, res) => {
    try {
        const existUser = await users.find({ email: req.body.email })
        if (existUser && existUser.length) throw new Error("El Correo ya esta registrado")
        const userss = new users({ ...req.body })
        const usersNew = await userss.save()
        res.status(200).json({ information: usersNew, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};



export const userss = async (req, res) => {
    try {
        const { page, limit } = req.query
        const userss = await users.find({})
            .skip((page || 0) * (limit || 10))
            .limit(10)

        res.status(200).json({ information: userss, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};

export const userssByFilter = async (req, res) => {
    try {
        const { page, limit } = req.query
        const filter = {}
        Object.keys(req.body).forEach(key => {
            if (req.body[key]) filter[key] = information[key](req.body[key])
        })
        const userss = await users.find(filter)
            .skip((page || 0) * (limit || 10))
            .limit(10)

        res.status(200).json({ information: information, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};


export const editUserById = async (req, res) => {
    try {
        const existUser = await users.find({ number_document: req.body.number_document, _id: { $ne: req.body._id } })
        if (existUser && existUser.length) {
            throw new Error("El numero de documento ya se encuentra registrado")
        }
        const id = req.body._id
        delete req.body._id
        const editUser = await users.updateOne({ _id: id }, req.body)
        res.status(200).json({ information: { _id: id, ...req.body }, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};



export const deleteEmployee = async (req, res) => {
    try {
        const { _id } = req.body
        const deleteUser = await users.deleteOne({ _id })
        res.status(200).json({ information: deleteUser, error: false });
    } catch (error) {
        console.log("Papá a Buscar el error", error.message)
        res.status(500).json({ message: error.message, error: true });
    }
}


