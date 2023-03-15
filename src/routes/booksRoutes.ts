import express from 'express';
import { Router } from 'express';
import { createBook, getBooksByFilter } from "../lib/books/booksController"
const route = Router();

export default (app: Router) => {

    //define Route books
    app.use("/books", route)

    /**
   * @swagger
   * /api/books:
   *   get:
   *     summary: Get books information
   *     description: this route get information of books
   *     produces:
   *       - application/json
    *     responses:
    *       200:
    *         description: list books
    */
    route.get('/', getBooksByFilter);

    /**
 * @swagger
 * /api/books:
 *   delete:
 *     summary: delete book by id 
 *     description: route for delete book by id 
 *     produces:
 *       - application/json
  *     responses:
  *       200:
  *         description: delete succesfully
  */
    route.delete('/', (() => { }));

    /**
* @swagger
* /api/books:
*   post:
*     summary: creation of book 
*     description: route for create new books 
*     produces:
*       - application/json
*     responses:
*       200:
*         description: book create correctly 
*/
    route.post('/create', createBook);

    /**
* @swagger
* /api/books:
*   patch:
*     summary: update book 
*     description: in this route you can update information of books 
*     produces:
*       - application/json
*     responses:
*       200:
*         description: book updated correctly
*/
    route.patch('/', (() => { }));



}
