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
        allowNull: true,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
    schema: 'dbo',
    tableName: 'user',
    indexes: [
        {
            unique: true,
            fields: ['cpf']
        }
    ]
});