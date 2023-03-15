import { Router } from 'express';
import UserRouter from './userRoute';
import LoginRoute from "./loginService"
import BooksRoutes from './booksRoutes';
export default () => {
    const app = Router();
    UserRouter(app)
    LoginRoute(app)
    BooksRoutes(app)
    return app
};