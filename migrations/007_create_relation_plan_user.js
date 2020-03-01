exports.up = function(knex) {
  return knex.schema.createTable("plan_user", table => {
    table.increments();
    table.integer("userId").unsigned();
    table
      .foreign("userId")
      .references("user.id")
      .onDelete("SET NULL");
    table.integer("planId").unsigned();
    table
      .foreign("planId")
      .references("plan.id")
      .onDelete("SET NULL");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("plan_user");
};
