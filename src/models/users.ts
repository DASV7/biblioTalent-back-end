import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    employee: { type: Boolean, required: false, default: false },
    password: { type: String, required: true },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
});

export const users = mongoose.model("users", employeeSchema);
