"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = () => {
    const user = 'dasvv', password = 'dasv', dbName = 'pruebas';
    const uri = `mongodb+srv://${user}:${password}@cluster0.gbdva.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect(uri, () => console.log("Connected to MongoDB Succesfully"));
};
exports.dbConnection = dbConnection;
//# sourceMappingURL=dbConnection.js.map