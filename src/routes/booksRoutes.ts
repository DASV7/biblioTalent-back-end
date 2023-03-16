import express from 'express';
import { Router } from 'express';
import { createBook, editBoookById, getBooksByFilter, deleteBook, lendBook, lendBookUser } from "../lib/books/booksController"
const route = Router();

export default (app: Router) => {

    //define Route books
    app.use("/books", route)

    /**
    * * @swagger
    * /api/books:
    *  post:
    *   description: Get books information
    *  responses:
    *  200:
    *  description: Success
    * 500:
    * description: Internal Server Error 
    * 
    * Params: query options
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
    route.post('/delete', deleteBook);

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
*   post:
*     summary: creation of book 
*     description: route for create new books 
*     produces:
*       - application/json
*     responses:
*       200:
*         description: book create correctly 
*/
    route.post('/borrowed', lendBook);
    /**
* @swagger
* /api/books:
*   post:
*     summary: api for borrow a book
*     description: route for create borrow a book
*     produces:
*       - application/json
*     responses:
*       200:
*         description: book create correctly 
*/
    route.post('/borrowed', lendBookUser);

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
    route.patch('/', editBoookById);



}
