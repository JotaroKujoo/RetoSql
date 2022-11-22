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
      user.belongsTo(models.role)
      user.hasMany(models.order)
    }
  }
  user.init({
    idUser: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    dateCreatedAcc: {
      allowNull: false,
      type: DataTypes.DATE
    },
    roleIdRole: {
      type: DataTypes.STRING,
      allowNull: false,
    references: {
      model: 'role',
      key: 'idRole'
    }
  }
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false
    
  });
  return user;
};