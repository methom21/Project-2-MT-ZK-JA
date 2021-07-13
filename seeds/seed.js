const sequelize = require('../config/connection');
const { User, Hero } = require('../models');

const userData = require('./userData.json');
const heroData = require('./heroData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Hero.bulkCreate(heroData, {
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
