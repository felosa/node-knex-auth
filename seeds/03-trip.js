exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trip")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trip").insert([
        {
          name: "Trip to Madrid",
          image: "",
          userId: 1,
          city: 1,
          dateStart: "2020-02-01",
          dateEnd: "2020-02-10",
        },
        {
          name: "Trip to Edinburgh",
          image: "",
          userId: 1,
          city: 2,
          dateStart: "2020-02-11",
          dateEnd: "2020-02-20",
        },
        {
          name: "Trip to Edinburgh",
          image: "",
          userId: 1,
          city: 2,
          dateStart: "2020-02-11",
          dateEnd: "2020-02-20",
        }
      ]);
    });
};
