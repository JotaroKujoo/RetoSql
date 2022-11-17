'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      mail: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        validate:{
          isEmail: true,
          len:[1,100]
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};