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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    image: {
    type: DataTypes.STRING,
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
    durability:{
    type:DataTypes.INTEGER,
    }, 
    strength:{
    type:DataTypes.INTEGER,
    },
    speed:{
    type:DataTypes.INTEGER,
    },
    intelligence:{
    type:DataTypes.INTEGER,
    },
    // api_id:{
    // type:DataTypes.INTEGER,
    // },
    // trait1unlock:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait1Buff:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait3:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'buffs',
    //     key: 'id',
    //   },
    // },
    // trait2unlock:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait2Buff:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait2:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'buffs',
    //     key: 'id',
    //   },
    // },
    // trait3unlock:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait3Buff:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: null
    // },
    // trait3:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'buffs',
    //     key: 'id',
    //   },
    // },
    sideline:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
