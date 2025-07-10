import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableGrupo = bolaoDB.define('grupo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    criadorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    opcaoId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'grupo',
});