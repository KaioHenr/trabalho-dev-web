import express from "express";
import {
    Authentication,
    //controler grupo
    PostGrupo,
    GetOneGrupo,
    GetAllGrupo,
    PatchGrupo,
    DeleteGrupo,
    PatchOpcaoGanhador,
    //controler opcao
    PostOpcao,
    GetOneOpcao,
    GetAllOpcao,
    PatchOpcao,
    DeleteOpcao,
} from '../Controller/index.js'

export const routerGrupo = express.Router();

routerGrupo.post('/post-grupo', Authentication, PostGrupo);
routerGrupo.get('/get-one-grupo/:id', Authentication, GetOneGrupo);
routerGrupo.get('/get-all-grupo', Authentication, GetAllGrupo);
routerGrupo.patch('/patch-grupo/:id', Authentication, PatchGrupo);
routerGrupo.delete('/delete-grupo/:id', Authentication, DeleteGrupo);
routerGrupo.patch('/ganhador/:id', Authentication, PatchOpcaoGanhador);

routerGrupo.post('/adiciona-opcao', Authentication, PostOpcao);
routerGrupo.get('/get-one-opcao/:id', Authentication, GetOneOpcao);
routerGrupo.get('/get-all-opcao', Authentication, GetAllOpcao);
routerGrupo.patch('/edita-opcao/:id', Authentication, PatchOpcao);
routerGrupo.delete('/delete-opcao/:id', Authentication, DeleteOpcao);

