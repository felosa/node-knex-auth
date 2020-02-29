const knex = require("./knex"); //the connection

module.exports = {
  getAll() {
    return knex("trip");
  }
};
