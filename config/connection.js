const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
var database = process.env.DATABASE_URL || 'campeonatodb'
var sequelize = ""

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(database)
}
else {
    sequelize = new Sequelize(database, 'postgres', '', {
        dialect: 'postgres'
    });
}

module.exports = sequelize;