import express from 'express';
import { routerUser } from './RouteUser.js';
import { routerGrupo } from './RouteGrupo.js';

export const router = express.Router();

router.use('/user', routerUser);
router.use('/grupo', routerGrupo);