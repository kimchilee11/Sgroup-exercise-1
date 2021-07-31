exports.seed = knex => knex('users').insert([ // Inserts seed entries
        {
             username: 'KC', fullname: 'Lee ', email: 'kc@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa'
        },
        {
            username: 'KC1', fullname: 'Lee ', email: 'hehe@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa'
        },
        {
            username: 'KC2', fullname: 'Lee ', email: 'kcl@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa'
        } // 123456789
    ]);
