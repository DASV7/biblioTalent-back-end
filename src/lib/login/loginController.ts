import { users } from "../../models/users"
import { information } from "../../utils/queryOptions"
import jsonWebToken from "../../services/otherServices/jsonWebToken";

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        let user: any = await users.find({ email, password })
        user = JSON.parse(JSON.stringify(user))
        if (!user || !user.length) throw new Error("Datos Incorrectos rectifique la información")
        const jwt = new jsonWebToken()
        delete user.password
        const newTokenUser = await jwt.generateTokenSimpleSecret(user, 60)
        res.status(200).json({ message: "Inicio de sesion satisfactorio", jwt: newTokenUser, error: false });

    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};