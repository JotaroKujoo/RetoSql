'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articles.hasOne(models.peliculas);
      articles.hasOne(models.series);

    }
  }
  articles.init({
    id_article: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      
    },
  }, {
    sequelize,
    modelName: 'articles',
    timestamps : false
  });
  return articles;
};