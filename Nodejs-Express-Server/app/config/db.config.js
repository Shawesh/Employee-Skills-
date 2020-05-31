const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.employees = require('../model/employee.model.js')(sequelize, Sequelize);
db.skill = require('../model/skill.model.js')(sequelize, Sequelize);
db.field = require('../model/field.model.js')(sequelize, Sequelize);
db.address = require('../model/address.model.js')(sequelize, Sequelize);


module.exports = db;