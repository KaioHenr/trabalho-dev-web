import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableLogin = bolaoDB.define('login', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    }
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'login',
});