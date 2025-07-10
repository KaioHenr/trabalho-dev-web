import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableUserGrupo = bolaoDB.define('user_grupo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    grupoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    papel: {
        type: Sequelize.ENUM('admin', 'membro'),
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'user_grupo',
});