import {
    SelectUser,
    DeleteSession,
    SelectOneUser,
    SelectAllUser,
    InsertUser,
    UpdateUser,
    RemoveUser
} from './ServiceUser.js';

import {
    SelectAllGrupos,
    SelectOneGrupo,
    InsertGrupo,
    UpdateGrupo,
    RemoveGrupo,
    UpdateOpcaoGanhador
} from './ServiceGrupo.js';

import {
    SelectOneOpcao,
    SelectAllOpcao,
    InsertOpcaoGrupo,
    InsertOpcao,
    UpdateOpcao,
    RemoveOpcao
} from './ServiceOpcao.js'

import {
    InsertAposta,
    SelectOneAposta,
    SelectAllAposta,
    RemoveAposta,
    InsertPalpite,
    SelectPalpiteUsuarioGrupo,
    SelectTodosPalpitesGrupo
} from './ServiceAposta.js'

export {
    // User
    SelectUser,
    DeleteSession,
    SelectOneUser,
    SelectAllUser,
    InsertUser,
    UpdateUser,
    RemoveUser,
    // Grupo/Bolão
    SelectAllGrupos,
    SelectOneGrupo,
    InsertGrupo,
    UpdateGrupo,
    RemoveGrupo,
    UpdateOpcaoGanhador,
    //Opcao
    SelectOneOpcao,
    SelectAllOpcao,
    InsertOpcaoGrupo,
    InsertOpcao,
    UpdateOpcao,
    RemoveOpcao,
    //Aposta
    InsertAposta,
    SelectOneAposta,
    SelectAllAposta,
    RemoveAposta,
    InsertPalpite,
    SelectPalpiteUsuarioGrupo,
    SelectTodosPalpitesGrupo
};