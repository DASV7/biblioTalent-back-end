import jwt from "jsonwebtoken"
import config from "../../config"

export default class jsonWebToken {
    generateTokenSimpleSecret = (data, duration, expire = null) => {
        if (expire) {
            return jwt.sign({ data: data }, config.tokenSecret, { expiresIn: expire });
        }
        return jwt.sign({
            exp: duration,
            data: data
        }, config.tokenSecret);
    }

    getTokenFromHeader = async (req: any): Promise<any> => {
        const headers = req.headers.authorization
        if ((headers && headers.split(" ")[0] === "Token") || (headers && headers.split(" ")[0] === "Bearer")) {
            const resToken = await this.verifyTokenSimpleSecret(String(req.headers.tokendata).split(" ")[1]);
            if (resToken.status) {
                return { status: true, code: 200, msg: "Token Válido", data: resToken.data }
            };
        }
        return { status: false, code: 401, msg: "Sin Token de Autorización" };
    };


    verifyTokenSimpleSecret = async (token): Promise<any> => {
        try {
            const decoded = jwt.verify(token, config.tokenSecret + '');
            return { status: true, data: decoded, code: 200, msg: 'Token válido' }
        } catch (err) {
            const { message, code } = this.messageJWT[err.message] || this.messageJWT["other"]
            return { status: false, data: err, code: code, msg: message }
        }
    }


    messageJWT = {
        "jwt expired": { message: "Token expiró", code: 901 },
        "jwt malformed": { message: "Token malformado", code: 902 },
        "invalid signature": { message: "", code: 903 },
        "jwt signature is required": { message: "", code: 904 },
        "other": { message: "Error con el token", code: 905 }
    }
}