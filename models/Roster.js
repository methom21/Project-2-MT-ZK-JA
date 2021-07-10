const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Roster extends Model {}

Roster.init
({
id:
{
type: DataTypes.INTEGER,
allowNull:false,
primaryKey: true,
autoIncrement: true
},

user_id: 
{
type: DataTypes.INTEGER,
references: {model: 'user',key: 'id',},
},

hero_id: 
{
type: DataTypes.INTEGER,
references: {model: 'hero',key: 'id',},
},
},

{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'roster',
});

module.exports = Roster;