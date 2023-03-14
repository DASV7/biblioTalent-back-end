"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./src/routes/index"));
const corsOptions = __importStar(require("./src/utils/corsOptions"));
const dbConnection_1 = require("./src/services/db/dbConnection");
(0, dbConnection_1.dbConnection)();
const swagger_1 = __importDefault(require("./src/loaders/swagger"));
// implementation swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
require('dotenv').config();
const app = (0, express_1.default)();
//parse informationMongo
app.use(body_parser_1.default.json());
//Add Cors
app.use((0, cors_1.default)(corsOptions));
//swagger Implementation
const swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// use Routes
for (const [key, value] of Object.entries(index_1.default)) {
    app.use(`/api/v1/${key}`, value);
}
const port = 3000;
//server creation
app.listen(port, () => {
    console.log(`
    ################################################
    Example app listening at http://localhost:${port}
    ################################################
    `);
});
//# sourceMappingURL=main.js.map