var bcrypt = require("bcryptjs");
// Creating our Team model
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      unique: true
    }
    
  });

  Team.associate = function(models) {
      Team.hasMany(models.User, {
          onDelete: "cascade"
      })

      Team.hasMany(models.Meal, {
        onDelete: "cascade"
      })

      Team.hasMany(models.Grocery, {
        onDelete: "cascade"
      })
  }


  return Team;
};