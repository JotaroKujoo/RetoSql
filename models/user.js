'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    mail: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        len:[1,100]
      }
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    birthDate: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};