import { TableGrupo } from "./Grupo.js";
import { TableUser } from "./User.js";
import { TableAposta } from "./Aposta.js";
import { TableUserGrupo } from "./UserGrupo.js";
import { TableOpcao } from "./Opcao.js";
import bolaoDB from "../index.js";

TableUser.hasMany(TableAposta, { foreignKey: 'userId', as: 'apostas' });
TableAposta.belongsTo(TableUser, { foreignKey: 'userId', as: 'apostador' });

TableUser.belongsToMany(TableGrupo, {
    through: TableUserGrupo,
    foreignKey: 'userId',
    otherKey: 'grupoId',
    as: 'grupos',
});

// --- GRUPO ---
TableGrupo.belongsTo(TableUser, { foreignKey: 'criadorId', as: 'criador' });
TableGrupo.hasMany(TableOpcao, { foreignKey: 'grupoId', as: 'opcoes' });

TableGrupo.belongsToMany(TableUser, {
    through: TableUserGrupo,
    foreignKey: 'grupoId',
    otherKey: 'userId',
    as: 'participantes',
});

// --- OPCAO ---
TableOpcao.belongsTo(TableGrupo, { foreignKey: 'grupoId', as: 'grupo' });
TableOpcao.hasMany(TableAposta, { foreignKey: 'opcaoId', as: 'apostas' });

// --- APOSTA ---
TableAposta.belongsTo(TableOpcao, { foreignKey: 'opcaoId', as: 'opcao' });

// --- USER_GRUPO ---
TableUserGrupo.belongsTo(TableUser, { foreignKey: 'userId', as: 'usuario' });
TableUserGrupo.belongsTo(TableGrupo, { foreignKey: 'grupoId', as: 'grupo' });

(async () => {
    try {
        await bolaoDB.sync({ force: true, alter: true });
        console.log('Database synced successfully.');
    } catch (err) {
        console.error('Error syncing database:', err);
    }
})();


export {
    TableGrupo,
    TableUser,
    TableAposta,
    TableUserGrupo,
    TableOpcao
};