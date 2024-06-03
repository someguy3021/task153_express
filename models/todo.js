const sequelize = require('../DB');
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('Todo', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  text: {
      type: DataTypes.STRING,
      allowNull: false
  },
  is_done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  },
}, {
  tableName: 'todos',
  timestamps: true
});

module.exports = Todo;