exports.up = function(knex) {
  return knex.schema.createTable("trip_plan", table => {
    table.increments();
    table.integer("tripId").unsigned();
    table
      .foreign("tripId")
      .references("trip.id")
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
  return knex.schema.dropTable("trip_plan");
};
