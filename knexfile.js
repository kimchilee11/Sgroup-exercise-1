require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        connection: process.env.DATABASE_URL,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: 'src/core/database/migrations',
                tableName: 'migrations',
            },
            seeds: {
                directory: `${__dirname}/src/database/seeds`,
                tableName: 'seeds',
            },
        },
        production: {
            client: 'mysql',
            connection: process.env.DATABASE_URL,
            searchPath: ['knex', 'public'],
            migrations: {
                directory: 'src/core/database/migrations',
                    tableName: 'migrations',
                },
                seeds: {
                    directory: `${__dirname}/src/database/seeds`,
                    tableName: 'seeds',
                },
        },
};
