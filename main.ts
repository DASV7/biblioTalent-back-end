import cors from "cors"
import express from 'express'
import bodyParser from 'body-parser'
import options from "./src/loaders/swagger"
import routes from './src/routes/index'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import dbConnection from "./src/services/db/dbConnection"
import config from "./src/config"
require('dotenv').config();


const app = express();
const port = 3000;

//parse informationMongo
app.use(bodyParser.json());

//Add Cors
app.use(cors(config.cors));

//swagger Implementation
const swaggerSpec = swaggerJSDoc(options);
// app.use("/", () => { console.log("asdasd") })
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(config.api.prefix, routes());

dbConnection()
//server creation
app.listen(port, (params) => {
    console.log(`
    ####################################################
    Server listening on port: http://localhost:${port}
    ####################################################
    `);
})




