import fs from "fs"
import path from 'path'
const basename = path.basename(module.filename);

export const db = async () => {
    fs.readdirSync(__dirname).filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts')
    }).forEach(function (file) {
        db[file.split('.ts')[0]] = require("./" + file);
    });
}