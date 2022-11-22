'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('series', [
      {
        idSerie:1,
        title: "Shameless",
        rating: 8,
        genre: "Comedia",
        createdAt: "2012-01-01",
        updatedAt: "2022-02-02",
        articleIdArticle : 11
     },
     {
        idSerie:2,
        title: "One piece",
        rating: 10,
        genre: "Anime",
        createdAt: "1995-01-01",
        updatedAt: "2022-10-30",
        articleIdArticle : 12
     },
     {
        idSerie:3,
        title: "Dragon Ball",
        rating: 10,
        genre: "Anime",
        createdAt: "1980-01-01",
        updatedAt: "2022-10-30",
        articleIdArticle : 13
     },
      {
        idSerie:4,
        title: "Friends",
        rating: 7,
        genre: "Comedia",
        createdAt: "1995-01-01",
        updatedAt: "2022-10-30",
        articleIdArticle : 14
    },
      {
        idSerie:5,
        title: 'Como conocí a vuestra madre',
        rating: 8,
        genre: 'Anime',
        createdAt: '2005-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 15
        },
        {
        idSerie:6,
        title: 'Dr.House',
        rating: 7,
        genre: 'Drama',
        createdAt: '2000-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 16
      },
      {
        idSerie:7,
        title: 'Los Simpsons',
        rating: 8,
        genre: 'Comedia',
        createdAt: '2000-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 17
      },
      {
        idSerie:8,
        title: 'La que se avecina',
        rating: 7,
        genre: 'Comedia',
        createdAt: '2000-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 18
      },
      {
        idSerie:9,
        title: 'Lost Memory',
        rating: 7,
        genre: 'Thriller',
        createdAt: '2000-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 19
      },
      {
        idSerie:10,
        title: 'Sin-chan',
        rating: 6,
        genre: 'Comedia',
        createdAt: '2000-01-01',
        updatedAt: '2022-10-30',
        articleIdArticle : 20
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('series', null, {});
    
  }
};
