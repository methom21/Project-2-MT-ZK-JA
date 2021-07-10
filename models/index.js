const User = require('./User');
const Hero = require('./Hero');
const Roster = require('./Roster');

Hero.belongsTo(User, {through:Roster,
  foreignKey: 'user_id'
  
});

// Roster.belongsToMany(User, {through:Roster,
//   foreignKey: 'user_id'
// });

Hero.belongsTo(Roster, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User,Hero,Roster };
