module.exports = {
  HOST: "localhost",
  USER: "temeculous",
  PASSWORD: "pass",
  DB: "ElderScrollsGames",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};
