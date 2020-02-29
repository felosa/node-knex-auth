exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plan")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plan").insert([
        {
          name: "plan en Madrid",
          city: "MADRID",
          image: "",
          owner: "1",
          description: "salir de tapas",
          languaje: "Spanish",
          date: "2020-02-05",
          genre: "ALL",
          lat: "",
          long: "",
          comments: "",
          filters: ""
        },
        {
          name: "plan en Madrid",
          city: "MADRID",
          image: "",
          owner: "1",
          description: "go to Sol",
          languaje: "English",
          date: "2020-02-10",
          genre: "MALE",
          lat: "",
          long: "",
          comments: "",
          filters: ""
        },
        {
          name: "plan en Edinburgh",
          city: "EDIMBURGH",
          image: "",
          owner: "1",
          description: "salir de tapas",
          languaje: "English",
          date: "2020-02-15",
          genre: "MALE",
          lat: "",
          long: "",
          comments: "",
          filters: ""
        },
        {
          name: "plan en Edinburgh",
          city: "EDIMBURGH",
          image: "",
          owner: "1",
          description: "Visit the castle",
          languaje: "English",
          date: "2020-02-15",
          genre: "FEMALE",
          lat: "",
          long: "",
          comments: "",
          filters: ""
        }
      ]);
    });
};
