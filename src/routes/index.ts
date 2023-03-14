import { Router } from 'express';
import UserRouter from './userRoute';
import LoginRoute from "./loginService"
export default () => {
    const app = Router();
    UserRouter(app)
    LoginRoute(app)
    return app
};