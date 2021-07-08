const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Hero extends Model {}

Hero.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    power:{
    type:DataTypes.INTEGER,
    },
    combat:{
      type:DataTypes.INTEGER,
      },
      power:{
        type:DataTypes.INTEGER,
        },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hero',
  }
);

module.exports = Hero;
