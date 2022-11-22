'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user)
      order.belongsTo(models.article)
    }
  }
  order.init({
    idOrder: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userIdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    }, 
    articleIdArticle: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'article',
        key: "idArticle"
      }
    },
    date: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
    
  }, {
    sequelize,
    modelName: 'order',
    timestamps: false

  });
  return order;
};

