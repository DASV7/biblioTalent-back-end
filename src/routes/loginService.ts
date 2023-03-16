import express from 'express';
import { Router } from 'express';
import { loginUser } from '../lib/login/loginController';

const route = Router();

export default (app: Router) => {
    //define rotue
    app.use("/login", route)

    /**
  * @swagger
  * /api/login:
  *   post:
  *     summary: api for Create new Users
  *     description: this route get information of users
  *     produces:
  *       - application/json
*     responses:
*       200:
*         description: list users 
 */
    route.post('/', loginUser);

}