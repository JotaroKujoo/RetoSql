'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('series', [{
        title: 'Shameless',
        rating: 8,
        genre: "Comedia",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02"
     },{
        title: "One piece",
        rating: 10,
        genre: "Anime",
        createdAt: "1995-01-01",
        updatedAt: "2022-10-30"
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('peliculas', null, {});
    
  }
};
