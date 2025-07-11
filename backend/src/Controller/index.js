import {
    GetAuth,
    Logout,
    PostUser,
    GetOneUser,
    GetAllUser,
    PatchUser,
    DeleteUser,
} from './ControllerUser.js';

import {
    PostGrupo,
    GetOneGrupo,
    GetAllGrupo,
    PatchGrupo,
    DeleteGrupo
} from './ControllerGrupo.js';

import {
    PostOpcao,
    GetOneOpcao,
    GetAllOpcao,
    PatchOpcao,
    DeleteOpcao,
} from './ControllerOpcao.js'
import {
    PostAposta,
    GetOneAposta,
    GetAllAposta,
    DeleteAposta,
} from './ControllerAposta.js'

import { TableUser } from "../Database/Models/index.js";

function extractToken(req) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return null;
}

async function Authentication(req, res, next) {
    next();
    // try {
    //     const token = extractToken(req);
    //     if (!token) {
    //         return res.status(401).json({ error: 'Token não fornecido ou mal formatado.' });
    //     }
    //     const user = await TableUser.findOne({ where: { token } });
    //     if (!user) {
    //         return res.status(401).json({ error: 'Token inválido.' });
    //     }
    //     req.user = user; // guarda info do usuário
    //     next();
    // } catch (error) {
    //     return res.status(500).json({ error: 'Erro na autenticação: ' + error.message });
    // }
}
export {
    // Função de autenticação
    Authentication,
    //Autenticacao
    GetAuth,
    Logout,
    // Controler User
    PostUser,
    GetOneUser,
    GetAllUser,
    PatchUser,
    DeleteUser,
    // Grupo/Bolao
    PostGrupo,
    GetOneGrupo,
    GetAllGrupo,
    PatchGrupo,
    DeleteGrupo,
    // Opcao
    PostOpcao,
    GetOneOpcao,
    GetAllOpcao,
    PatchOpcao,
    DeleteOpcao,
    //Aposta
    PostAposta,
    GetOneAposta,
    GetAllAposta,
    DeleteAposta,
};