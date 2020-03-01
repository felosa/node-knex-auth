const knex = require("./knex"); //the connection

module.exports = {
  getAll() {
    return knex("trip");
  },
  getOne(id) {
    return knex("trip")
      .where("id", id)
      .first();
  },
  create(trip) {
    return knex("trip").insert(trip, "*");
  },
  update(id, trip) {
    return knex("trip")
      .where("id", id)
      .update(trip, "*");
  },
  delete(id) {
    return knex("trip")
      .where("id", id)
      .delete();
  }
};
