"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.editUserById = exports.userssByFilter = exports.userss = exports.createNewUser = void 0;
const users_1 = require("../../models/users");
const queryOptions_1 = require("../../utils/queryOptions");
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUser = yield users_1.users.find({ number_document: req.body.number_document });
        if (existUser && existUser.length)
            throw new Error("El numero de documento ya se encuentra registrado");
        const userss = new users_1.users(Object.assign({}, req.body));
        const usersNew = yield userss.save();
        res.status(200).json({ information: usersNew, error: false });
    }
    catch (err) {
        console.log("Papá a Buscar el error", err.message);
        res.status(500).json({ message: err.message, error: true });
    }
});
exports.createNewUser = createNewUser;
const userss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const userss = yield users_1.users.find({})
            .skip((page || 0) * (limit || 10))
            .limit(10);
        res.status(200).json({ information: userss, error: false });
    }
    catch (err) {
        console.log("Papá a Buscar el error", err.message);
        res.status(500).json({ message: err.message, error: true });
    }
});
exports.userss = userss;
const userssByFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const filter = {};
        Object.keys(req.body).forEach(key => {
            if (req.body[key])
                filter[key] = queryOptions_1.information[key](req.body[key]);
        });
        const userss = yield users_1.users.find(filter)
            .skip((page || 0) * (limit || 10))
            .limit(10);
        res.status(200).json({ information: queryOptions_1.information, error: false });
    }
    catch (err) {
        console.log("Papá a Buscar el error", err.message);
        res.status(500).json({ message: err.message, error: true });
    }
});
exports.userssByFilter = userssByFilter;
const editUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUser = yield users_1.users.find({ number_document: req.body.number_document, _id: { $ne: req.body._id } });
        if (existUser && existUser.length) {
            throw new Error("El numero de documento ya se encuentra registrado");
        }
        const id = req.body._id;
        delete req.body._id;
        const editUser = yield users_1.users.updateOne({ _id: id }, req.body);
        res.status(200).json({ information: Object.assign({ _id: id }, req.body), error: false });
    }
    catch (err) {
        console.log("Papá a Buscar el error", err.message);
        res.status(500).json({ message: err.message, error: true });
    }
});
exports.editUserById = editUserById;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        const deleteUser = yield users_1.users.deleteOne({ _id });
        res.status(200).json({ information: deleteUser, error: false });
    }
    catch (error) {
        console.log("Papá a Buscar el error", error.message);
        res.status(500).json({ message: error.message, error: true });
    }
});
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=userController.js.map