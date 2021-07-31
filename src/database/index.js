import knex from 'knex';
import { ConfigService } from '../libs/config/config.service';
import { logger } from '../common/utils';
import config from '../../knexfile';

const knexConnection = knex(config[ConfigService.getSingleton().get('NODE_ENV')]);

export default knexConnection;

export const getTransaction = () => knexConnection.transaction();

export const authenDatabaseConnection = async () => {
    try {
        await knexConnection.raw('SELECT 1');
        logger.info('Database connected');
    } catch (error) {
        logger.error(error);
    }
};
