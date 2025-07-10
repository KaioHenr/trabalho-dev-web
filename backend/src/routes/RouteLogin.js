import express from "express";
import { GetOneLogin, PostLogin, PatchLogin, DeleteLogin, Authentication, GetAllLogin } from '../Controller/index.js'

export const routerLogin = express.Router();

routerLogin.post('/post-login', PostLogin);
routerLogin.get('/get-one-login', Authentication, GetOneLogin);
routerLogin.get('/get-all-login', Authentication, GetAllLogin);
routerLogin.patch('/patch-login', Authentication, PatchLogin);
routerLogin.delete('/delete-login', Authentication, DeleteLogin);