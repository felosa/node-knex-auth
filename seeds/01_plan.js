
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plan').del()
    .then(function () {
      // Inserts seed entries
      return knex('plan').insert([
        {title: 'ir a Madrid'},
        {title: 'ir a Edinburgh'},
        {title: 'ir a Aberdeen'}
      ]);
    });
};
