import path from 'path';

export default {

    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "Talenta back-end",
            description: "Service back-end",
            contact: {
                name: "Prueba tecnica Diego Sepulveda Velez",
                url: 'https://www.linkedin.com/in/diegosepulvedavelez/',
                email: 'dasvv7@gmail.com'
            }
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "first version server"
            }]
    },
    apis: [
        path.resolve(__dirname, '../') + '/routes/*.ts'
    ]
}
