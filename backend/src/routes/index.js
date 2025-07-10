import express from 'express';
import { routerUser } from './RouteUser.js';


export const router = express.Router();

router.use('/user', routerUser);