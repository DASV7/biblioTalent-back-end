"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    first_name: { type: String, required: true },
    second_name: { type: String, required: false },
    surname: { type: String, required: true },
    second_Surname: { type: String, required: false },
    country: { type: String, required: true },
    type_document: { type: String, required: true },
    number_document: { type: String, required: true },
    email: { type: String, required: true },
    area: { type: String, required: true },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
});
exports.users = mongoose_1.default.model("employees", employeeSchema);
//# sourceMappingURL=users.js.map