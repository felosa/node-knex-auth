exports.up = function(knex) {
  return knex.schema.createTable("trip", table => {
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
    table.text("dateStart");
    table.text("dateEnd");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("trip");
};
