exports.up = function(knex) {
  return knex.schema.createTable("plan", table => {
    table.increments();
    table.text("name");
    table.text("city");
    table.text("image");
    table.text("owner");
    table.text("description");
    table.text("languaje");
    table.text("date");
    table.text("genre");
    table.text("lat");
    table.text("long");
    table.text("comments");
    table.text("filters");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("plan");
};
