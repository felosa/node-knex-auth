exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("comment")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("comment").insert([
        {
          description: "fsdafsafwefwefsdf",
          userId: 1,
          planId: 2
        },
        {
          description: "fsdafsafwefwefsdf",
          userId: 2,
          planId: 2
        },
        {
          description: "fsdafsafwefwefsdf",
          userId: 1,
          planId: 1
        },
        {
          description: "fsdafsafwefwefsdf",
          userId: 1,
          planId: 1
        }
      ]);
    });
};
