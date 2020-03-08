const knex = require("./knex"); //the connection

module.exports = {
  getAll() {
    return knex("plan")
      .leftJoin("city", "city.id", "plan.city")
      .leftJoin("user", "user.id", `plan.userId`)
      .select(
        "plan.id",
        "plan.name",
        "plan.image",
        "user.name as owner",
        "city.name as city",
        "plan.description",
        "plan.languaje",
        "plan.date",
        "plan.genre",
        "plan.lat",
        "plan.long"
      );
  },
  getOne(id) {
    return knex("plan")
      .where("id", id)
      .first();
  },

  getTripPlans(tripId) {
    console.log(tripId);
    return knex("trip_plan")
      .where({ tripId: tripId })
      .leftJoin("plan", "plan.id", `trip_plan.planId`)
      .leftJoin("user", "user.id", `plan.userId`)
      .leftJoin("city", "city.id", "plan.city")
      .select(
        "plan.id",
        "plan.name",
        "plan.image",
        "user.name as owner",
        "city.name as city",
        "plan.description",
        "plan.languaje",
        "plan.date",
        "plan.genre",
        "plan.lat",
        "plan.long"
      );
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
