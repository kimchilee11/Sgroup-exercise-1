import knex from 'knex';
import config from '../../../knexfile';
import { NODE_ENV } from '../env';

const connection = knex(config[NODE_ENV]);

export default connection;

export const getTransaction = () => connection.transaction();

export const authenDatabaseConnection = async () => {
    try {
        await connection.raw('SELECT 1');
        console.log();('Database connected');
    } catch (error) {
        console.log(error);
    }
};
