exports.up = function(knex) {
  return knex.schema.createTable("trip", table => {
    table.increments();
    table.text("name");
    table.text("city");
    table.text("image");
    table.text("owner");
    table.text("dateStart");
    table.text("dateEnd");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("trip");
};
