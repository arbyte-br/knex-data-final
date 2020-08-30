exports.up = (knex) => knex.schema.createTable('teatcher_class', (table) => {
    table.increments('id');

    table.integer('id_teatcher')
        .references('teatchers.id')
        .notNullable()
        .onDelete('CASCADE');

    table.integer('id_class')
        .references('classes.id')
        .notNullable()
        .onDelete('CASCADE');

    table.integer('id_group')
        .references('groups.id')
        .notNullable()
        .onDelete('CASCADE');
});

exports.down = (knex) => knex.schema.dropTable('teatcher_class');