const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Store = sequelize.define('Store', {
  name: { type: DataTypes.STRING(60), allowNull: false },
  address: { type: DataTypes.STRING(400) },
});

module.exports = Store;
