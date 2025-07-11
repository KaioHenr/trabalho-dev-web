import { Sequelize } from "sequelize";
import bolaoDB from '../index.js';

export const TableUser = bolaoDB.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Token: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true,
    schema: 'dbo',
    tableName: 'user',
    indexes: [
        {
            unique: true,
            fields: ['email']
        },
        {
            unique: true,
            fields: ['cpf']
        }
    ]
});