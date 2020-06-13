var bcrypt = require("bcryptjs");
// Creating our Team model
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    key: {
      type: DataTypes.INTEGER,
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
  }


  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // Team.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // Team.addHook("beforeCreate", function(team) {
  //   team.password = bcrypt.hashSync(team.password, bcrypt.genSaltSync(10), null);
  // });
  return Team;
};