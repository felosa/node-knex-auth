exports.up = function(knex) {
  return knex.schema.createTable("plan", table => {
    table.increments();
    table.text("title");
  });
};

exports.down = function(knex) {
  return knex.dropTable("plan");
};
