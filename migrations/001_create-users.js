exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.text("name");
    table.text("email");
    table.text("password");
    table.text("image");
    table.text("description");
    table.text("country");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
