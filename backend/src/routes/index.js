import express from 'express';
import { routerLogin } from './RouteLogin.js';
import { routerUser } from './RouteUser.js';


export const router = express.Router();

router.use('/login', routerLogin);
router.use('/user', routerUser);