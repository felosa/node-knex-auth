exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          name: "Fernando",
          email: "fer@fer.com",
          password: "admin",
          image: "",
          description: "I want to find nice people in every trip",
          country: "Spain",
        },
        {
          id: 2,
          name: "Ruth",
          email: "ruth@ruth.com",
          password: "admin",
          image: "",
          description: "I want to see the world",
          country: "Scotland",
        },
        {
          id: 3,
          name: "Ollie",
          email: "ollie@ollie.com",
          password: "admin",
          image: "",
          description: "I want to run in every field",
          country: "Spain",
        }
      ]);
    });
};
