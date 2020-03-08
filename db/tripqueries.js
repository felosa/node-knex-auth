const knex = require("./knex"); //the connection

module.exports = {
  userTrips(userId) {
    return knex("trip")
      .where("userId", userId)
      .leftJoin("city", "city.id", `trip.city`)
      .leftJoin("user", "user.id", `trip.userId`)
      .select(
        "trip.id",
        "trip.name",
        "trip.image",
        "user.name as tripOwner",
        "city.name as tripCity",
        "trip.dateStart",
        "trip.dateEnd"
      );
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
