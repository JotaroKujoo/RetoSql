'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peliculas', {
      id_pelicula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      ArticleIdArticle: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_article'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('peliculas');
  }
};