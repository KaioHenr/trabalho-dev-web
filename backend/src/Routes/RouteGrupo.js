import express from "express";
import { Authentication, PostGrupo, GetOneGrupo, GetAllGrupo, PatchGrupo, DeleteGrupo } from '../Controller/index.js'

export const routerGrupo = express.Router();

// routerGrupo.post('/post-grupo', Authentication, PostGrupo);
// routerGrupo.get('/get-one-grupo', Authentication, GetOneGrupo);
// routerGrupo.get('/get-all-grupo', Authentication, GetAllGrupo);
// routerGrupo.patch('/patch-grupo', Authentication, PatchGrupo);
// routerGrupo.delete('/delete-grupo', Authentication, DeleteGrupo);

// Rotas sem autenticacao kk
routerGrupo.post('/post-grupo', PostGrupo);
routerGrupo.get('/get-one-grupo', GetOneGrupo);
routerGrupo.get('/get-all-grupo', GetAllGrupo);
routerGrupo.patch('/patch-grupo', PatchGrupo);
routerGrupo.delete('/delete-grupo', DeleteGrupo);

// Not done yet
// routerGrupo.post('/adiciona-opcao', Authentication, PostOpcao);
// routerGrupo.get('/get-one-opcao', Authentication, GetOneOpcao);
// routerGrupo.get('/get-all-opcao', Authentication, GetAllOpcao);
// routerGrupo.patch('/edita-opcao', Authentication, PatchOpcao);
// routerGrupo.delete('/delete-opcao', Authentication, DeleteOpcao);

