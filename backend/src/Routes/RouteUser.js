import express from "express";
import { Authentication, GetAuth, PostUser, GetOneUser, GetAllUser, PatchUser, DeleteUser } from '../Controller/index.js'

export const routerUser = express.Router();

routerUser.post('/login', GetAuth);
routerUser.post('/post-user', PostUser);
routerUser.get('/get-one-user', Authentication, GetOneUser);
routerUser.get('/get-all-user', Authentication, GetAllUser);
routerUser.patch('/patch-user', Authentication, PatchUser);
routerUser.delete('/delete-user', Authentication, DeleteUser);