exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plan")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plan").insert([
        {
          name: "Plan en Madrid",
          image: "",
          userId: 1,
          city: 1,
          description: "salir de tapas",
          languaje: "Spanish",
          date: "2020-02-05",
          genre: "ALL",
          lat: "",
          long: ""
        },
        {
          name: "Plan en Edinburgh",
          image: "",
          userId: 2,
          city: 2,
          description: "Ver el castillo",
          languaje: "English",
          date: "2020-02-10",
          genre: "MALE",
          lat: "",
          long: ""
        },
        {
          name: "Plan en Glasgow",
          image: "",
          userId: 1,
          city: 3,
          description: "salir de fiesta",
          languaje: "Spanish",
          date: "2020-02-05",
          genre: "FEMALE",
          lat: "",
          long: ""
        },
        {
          name: "Plan en Paris",
          image: "",
          userId: 1,
          city: 4,
          description: "Ver la torre Eiffel",
          languaje: "Spanish",
          date: "2020-02-05",
          genre: "ALL",
          lat: "",
          long: ""
        }
      ]);
    });
};
