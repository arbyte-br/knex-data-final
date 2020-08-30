const knex = require('../database');

let queryBuilder;

const connectDatabase = async () => {
    queryBuilder = queryBuilder || knex;

    return queryBuilder;
}

module.exports = {
    connectDatabase
}