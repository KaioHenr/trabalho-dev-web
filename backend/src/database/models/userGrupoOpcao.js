import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableUserGrupoOpcao = bolaoDB.define('user_grupo_opcao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_opcao: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: true,
});