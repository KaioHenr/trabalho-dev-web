import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableOpcao = bolaoDB.define('opcao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    grupoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'opcao',
});