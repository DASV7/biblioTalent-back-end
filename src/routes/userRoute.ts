import express from 'express';
import { Router } from 'express';
import { editUserById, deleteEmployee, createNewUser } from '../lib/users/userController';


const route = Router();

export default (app: Router) => {

  //define Route users
  app.use("/users", route)

  /**
   * * @swagger
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
  route.post('/', editUserById);

  /**
   * * @swagger
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
  route.delete('/', deleteEmployee);

  /**
   * * @swagger
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
  route.post('/create', createNewUser);
}




