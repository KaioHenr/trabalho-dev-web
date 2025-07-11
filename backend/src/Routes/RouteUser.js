import express from "express";
import {
    Authentication,
    //Autenticação
    GetAuth,
    Logout,
    //User
    PostUser,
    GetOneUser,
    GetAllUser,
    PatchUser,
    DeleteUser,
    //Aposta
    PostAposta,
    GetOneAposta,
    GetAllAposta,
    DeleteAposta,
} from '../Controller/index.js'

export const routerUser = express.Router();

routerUser.post('/login', GetAuth);
routerUser.patch('/logout', Authentication, Logout);

routerUser.post('/post-user', PostUser);
routerUser.get('/get-one-user/:id', Authentication, GetOneUser);
routerUser.get('/get-all-user', Authentication, GetAllUser);
routerUser.patch('/patch-user/:id', Authentication, PatchUser);
routerUser.delete('/delete-user/:id', Authentication, DeleteUser);

routerUser.post('/post-aposta', PostAposta);
routerUser.get('/get-one-Aposta/:id', Authentication, GetOneAposta);
routerUser.get('/get-all-Aposta', Authentication, GetAllAposta);
routerUser.delete('/delete-Aposta/:id', Authentication, DeleteAposta);