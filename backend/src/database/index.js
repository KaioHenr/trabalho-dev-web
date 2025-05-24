import Sequelize from 'sequelize';
import { databaseConfig } from '../Config/index.js';

const bolaoDB = new Sequelize(databaseConfig.database, databaseConfig.user, databaseConfig.password, {
    dialect: 'mssql',
    host: databaseConfig.host,
    logging: false,
    dialectOptions: {
        options: {
            encrypt: false,
            enableArithAbort: false,
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            }
        }
    }
});

bolaoDB.authenticate().then(() => {
    console.log("banco conectado")
}).catch(err => {
    console.error("erro:" + err)
});
export default bolaoDB;