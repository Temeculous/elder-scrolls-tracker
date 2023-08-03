module.exports = (sequelize, Sequelize) => {
  const ElderScrollsGame = sequelize.define("elderScrollsGame", {
    title: {
      type: Sequelize.STRING,
    },
    yearReleased: {
      type: Sequelize.INTEGER,
    },
    popularity: {
      type: Sequelize.STRING,
    },
    completionHours: {
      type: Sequelize.INTEGER,
    },
  });
  return ElderScrollsGame;
};
