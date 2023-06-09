import { users } from "../../models/users"
import jsonWebToken from "../../services/otherServices/jsonWebToken";
import { information } from "../../utils/queryOptions"


export const createNewUser = async (req, res) => {
    try {
        const existUser = await users.findOne({ email: req.body.email })
        req.body.employee = req.body.employee == 'on' ? true : false
        if (existUser) throw new Error("El Correo ya esta registrado")
        const userss = new users({ ...req.body })
        const usersNew = await userss.save()
        const jwt = new jsonWebToken()
        delete usersNew.password
        const newTokenUser = await jwt.generateTokenSimpleSecret(usersNew, 60)
        res.status(200).json({ jwt: newTokenUser, error: false });
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



export const deleteUsers = async (req, res) => {
    try {
        const { _id } = req.body
        const deleteUser = await users.deleteOne({ _id })
        res.status(200).json({ information: deleteUser, error: false });
    } catch (error) {
        console.log("Papá a Buscar el error", error.message)
        res.status(500).json({ message: error.message, error: true });
    }
}


