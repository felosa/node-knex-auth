exports.up = function(knex) {
  return knex.schema.createTable("plan", table => {
    table.increments();
    table.text("name");
    table.text("image");
    table.integer("userId").unsigned();
    table
      .foreign("userId")
      .references("user.id")
      .onDelete("SET NULL");
    table.integer("city").unsigned();
    table
      .foreign("city")
      .references("city.id")
      .onDelete("SET NULL");
    table.text("description");
    table.text("languaje");
    table.text("date");
    table.text("genre");
    table.text("lat");
    table.text("long");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("plan");
};
