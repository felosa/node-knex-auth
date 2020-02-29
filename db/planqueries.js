const knex = require("./knex"); //the connection

module.exports = {
  getAll() {
    return knex("plan");
  },
  getOne(id) {
    return knex("plan")
      .where("id", id)
      .first();
  },
  create(plan) {
    return knex("plan").insert(plan, "*");
  },
  update(id, plan) {
    return knex("plan")
      .where("id", id)
      .update(plan, "*");
  },
  delete(id) {
    return knex("plan")
      .where("id", id)
      .delete();
  }
};
