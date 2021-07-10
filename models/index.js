const User = require('./User');
const Hero = require('./Hero');
const Roster = require('./Roster');

User.hasMany(Hero, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Hero.belongsTo(User, {
  foreignKey: 'user_id'
});

Roster.belongsToMany(User, {
  foreignKey: 'user_id'
});


module.exports = { User,Hero,Roster };
