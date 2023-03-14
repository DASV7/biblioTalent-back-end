import { Router } from 'express';
import { Router as UserRouter } from '../lib/users/userRoute';

export const routes = {
    users: UserRouter,
};