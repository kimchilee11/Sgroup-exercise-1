/* eslint-disable func-names */
/**
 * @param {import { knex } from "knex";} knex
 */

 exports.seed = function (knex) {
  return knex('roles').del()
    .then(() => knex('roles').insert([
        {
         name: 'admin'
        },
                {
         name: 'user'
        },
        {
         name: 'author'
        }
      ]));
};
