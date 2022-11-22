'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.STRING
      },
      dateCreatedAcc: {
        allowNull: false,
        type: Sequelize.DATE
      },
      roleIdRole: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "idRole"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};