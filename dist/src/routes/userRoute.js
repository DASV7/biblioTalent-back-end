"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../lib/users/userController");
const route = (0, express_1.Router)();
exports.default = (app) => {
    //define Route users
    app.use("/users", route);
    /**
     * @swagger
     * /api/users:
     *   get:
     *     summary: Get info Users
     *     description: this route get information of users
     *     produces:
     *       - application/json
  *     responses:
  *       200:
  *         description: list users
    */
    // router.get('/', getAllEmployees);
    /**
     * /api/users:
     *  post:
     *   description: Edit Users
     *  responses:
     *  200:
     *  description: Success
     * 500:
     * description: Internal Server Error
     *
     * Params: query options
    */
    route.post('/', userController_1.editUserById);
    /**
     * /api/users/filter:
     *  post:
     *   description: get Users By filter
     *  responses:
     *  200:
     *  description: Success
     * 500:
     * description: Internal Server Error
     *
     * Params: query options
    */
    // route.post('/filter', getEmployeesByFilter);
    /**
     * /api/users:
     *  post:
     *   description: This end-point delte user by id
     *  responses:
     *  200:
     *  description: Success
     * 500:
     * description: Internal Server Error
     *
     * Params: query options with iduser
    */
    route.delete('/', userController_1.deleteEmployee);
    /**
     * /api/users:
     *  post:
     *   description: this end-point Create a new employee
     *  responses:
     *  200:
     *  description: Success
     * 500:
     * description: Internal Server Error
     *
     * Params: query options with information of user
    */
    route.post('/create', userController_1.createNewUser);
};
//# sourceMappingURL=userRoute.js.map