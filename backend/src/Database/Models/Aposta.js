import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableAposta = bolaoDB.define('aposta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    opcaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'aposta',
});