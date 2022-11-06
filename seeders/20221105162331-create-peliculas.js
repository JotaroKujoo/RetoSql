'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('peliculas', [{
        title: 'Sin-chan: El chuleton imposible',
        rating: 8,
        genre: "Infantil"
     },{
        title: "La liga de la justicia",
        rating: 6,
        genre: "Accion"
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('peliculas', null, {});
    
  }
};
