require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            user: 'root',
            password: '',
            database: 'blog'
        },
        searchPath: ['knex', 'public'],
        migrations: {
            directory: 'src/database/migrations',
                tableName: 'migrations',
            },
            seeds: {
                directory: `${__dirname}/src/database/seeds`,
                tableName: 'seeds',
            },
        },
        production: {
            client: 'mysql',
            connection: {
                user: 'root',
                password: '',
                database: 'blog'
            },
            searchPath: ['knex', 'public'],
            migrations: {
                directory: 'src/database/migrations',
                    tableName: 'migrations',
                },
                seeds: {
                    directory: `${__dirname}/src/database/seeds`,
                    tableName: 'seeds',
                },
        },
};
