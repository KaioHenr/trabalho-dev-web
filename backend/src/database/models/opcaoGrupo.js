import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableOpcaoGrupo = bolaoDB.define('opcao_grupo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    opcao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    schema: 'dbo',
    tableName: 'opcao_grupo',
});