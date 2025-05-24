import { TableGrupo } from "./grupo.js";
import { TableUser } from "./user.js";
import { TableUserGrupoOpcao } from "./userGrupoOpcao.js";
import { TableOpcaoGrupo } from "./opcaoGrupo.js";
import bolaoDB from "../index.js";


// Grupo → Opcoes
TableGrupo.hasMany(TableOpcaoGrupo, {
    foreignKey: 'id_grupo',
    onDelete: 'CASCADE',
});
TableOpcaoGrupo.belongsTo(TableGrupo, {
    foreignKey: 'id_grupo',
});

// Grupo → user_grupo_opcao
TableGrupo.hasMany(TableUserGrupoOpcao, {
    foreignKey: 'id_grupo',
    onDelete: 'CASCADE',
});
TableUserGrupoOpcao.belongsTo(TableGrupo, {
    foreignKey: 'id_grupo',
});

// User → user_grupo_opcao
TableUser.hasMany(TableUserGrupoOpcao, {
    foreignKey: 'id_user',
    onDelete: 'CASCADE',
});
TableUserGrupoOpcao.belongsTo(TableUser, {
    foreignKey: 'id_user',
});

// OpcaoGrupo → user_grupo_opcao
TableOpcaoGrupo.hasMany(TableUserGrupoOpcao, {
    foreignKey: 'id_opcao',
    onDelete: 'CASCADE',
});
TableUserGrupoOpcao.belongsTo(TableOpcaoGrupo, {
    foreignKey: 'id_opcao',
});


(async () => {
    try {
        await bolaoDB.sync({ force: false });
        console.log('Database synced successfully.');
    } catch (err) {
        console.error('Error syncing database:', err);
    }
})();


export {
    TableGrupo,
    TableUser,
    TableUserGrupoOpcao,
    TableOpcaoGrupo
};