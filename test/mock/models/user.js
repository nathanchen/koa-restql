'use strict';

module.exports.attributes = (DataTypes) => {
  return {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },   
    login : {
      type: DataTypes.STRING,
      unique: true
    }, 
    email : DataTypes.STRING
  };
}

module.exports.options = {

  classMethods: {
    associate: (models) => {
      models.user.hasOne(models.profile, {
        as: 'profile',
        foreignKey: 'user_id',
        constraints: false
      });

      models.user.hasMany(models.department, {
        as: 'departments',
        foreignKey: 'user_id',
        constraints: false
      });

      models.user.belongsToMany(models.tag, {
        as: 'tags',
        constraints: false,
        through: {
          model: models.user_tags,
          foreignKey: 'user_id',
          otherKey: 'tag_id',
        }
      })
    }
  }
}