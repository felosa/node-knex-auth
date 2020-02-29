exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trip")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trip").insert([
        {
          name: "Trip to Madrid",
          city: "MADRID",
          image: "",
          owner: "1",
          dateStart: "2020-02-01",
          dateEnd: "2020-02-10",
        },
        {
          name: "Trip to Edinburgh",
          city: "EDINBURGH",
          image: "",
          owner: "1",
          dateStart: "2020-02-11",
          dateEnd: "2020-02-20",
        },
        {
          name: "Trip to Edinburgh",
          owner: 1,
          city: "EDIMBURGH",
          dateStart: "2020-02-11",
          dateEnd: "2020-02-20",
        }
      ]);
    });
};
