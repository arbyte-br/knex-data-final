exports.seed = async (knex) => {
  await knex('teatchers').del();

  return knex('teatchers').insert([{
    name: 'rafael',
    lastname: 'magalhaes'
  }]);
}