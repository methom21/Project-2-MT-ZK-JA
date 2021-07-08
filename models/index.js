const User = require('./User');
const Hero = require('./Hero');

User.hasMany(Hero, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Hero.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,Hero };
