exports.up = function(knex) {
  return knex.schema.createTable("city", table => {
    table.increments();
    table.text("name");
    table.text("lat");
    table.text("long");
    table.text("image");
    table.text("country");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("city");
};
