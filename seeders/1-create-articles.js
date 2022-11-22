'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
      idArticle: 1
     },
     {
      idArticle: 2
     },
     {
      idArticle: 3
     },
     {
      idArticle: 4
     },
     {
      idArticle: 5
     },
     {
      idArticle: 6
     },
     {
      idArticle: 7
     },
     {
      idArticle: 8
     },
     {
      idArticle: 9
     },
     {
      idArticle: 10
     },
     {
      idArticle: 11
     },
     {
      idArticle: 12
     },
     {
      idArticle: 13
     },
     {
      idArticle: 14
     },
     {
      idArticle: 15
     },
     {
      idArticle: 16
     },
     {
      idArticle: 17
     },
     {
      idArticle: 18
     },
     {
      idArticle: 19
     },
     {
      idArticle: 20
     },

    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  }
};
