'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('movies', [
      {
        title: 'Sin-chan: El chuleton imposible',
        rating: 8,
        genre: "Infantil",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 1
     },
     {
        title: "La liga de la justicia",
        rating: 6,
        genre: "Accion",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 2
     },
     {
        title: "Pokemon",
        rating: 7,
        genre: "Infantil",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 3
     },
     {
        title: "El padrino",
        rating: 9,
        genre: "Drama",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 4
     },
     {
        title: "El efecto mariposa",
        rating: 7,
        genre: "Thriller",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 5
     },
     {
        title: "La lista de Schindler",
        rating: 9,
        genre: "Drama",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 6
     },
     {
        title: "El diario de Noa",
        rating: 7,
        genre: "Romance",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 7
     },
     {
        title: "4 bodas y un funeral",
        rating: 8,
        genre: "Comedia",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 8
     },
     {
        title: "Black Adam",
        rating: 9,
        genre: "Superheroes",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 9
     },
     {
        title: "Los vengadores",
        rating: 8,
        genre: "Superheroes",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 10
     },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('movies', null, {});
    
  }
};
