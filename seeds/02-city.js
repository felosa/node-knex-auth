exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("city")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("city").insert([
        {
          name: "Madrid",
          lat: "",
          long: "",
          image: "",
          country: "Spain"
        },
        {
          name: "Edinburgh",
          lat: "",
          long: "",
          image: "",
          country: "Scotland"
        },
        {
          name: "Paris",
          lat: "",
          long: "",
          image: "",
          country: "France"
        },
        {
          name: "Oslo",
          lat: "",
          long: "",
          image: "",
          country: "Norway"
        }
      ]);
    });
};
