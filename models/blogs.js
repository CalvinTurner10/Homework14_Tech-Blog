const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Blogs extends Model {}

Blogs.init(
  {
id :{
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
},
name: {
  type: DataTypes.STRING,
  allowNull: false,
},
description: {
  type: DataTypes.STRING,
},
date_created:{
  type: DataTypes.Date,
  allowNull: false,
  defaultValue:DataTypes.NOW,
},
user_id:{
  type: DataTypes.INTEGER,
  references:{
    module: 'user',
    key: 'id',
  },
},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    moduleName : 'blogs',
  }
);
 

module.exports = Blogs;
