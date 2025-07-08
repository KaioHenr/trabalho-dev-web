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
    }
}, {
    freezeTableName: true,
    timestamps: true,
});