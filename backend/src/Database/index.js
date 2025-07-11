import Sequelize from 'sequelize';
import { databaseConfig } from '../Config/index.js';

const bolaoDB = new Sequelize(databaseConfig.database, databaseConfig.user, databaseConfig.password, {
    dialect: 'mysql',
    host: databaseConfig.host,
    port: databaseConfig.port,
    logging: false
});

bolaoDB.authenticate().then(() => {
    console.log("banco conectado")
}).catch(err => {
    console.error("erro:" + err)
});
export default bolaoDB;