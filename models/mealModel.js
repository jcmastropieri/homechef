module.exports = function(sequelize, DataTypes) {
    var Meal = sequelize.define("Meal", {
        mealDay: DataTypes.STRING,
        mealTime: DataTypes.STRING,
        mealChoice: DataTypes.STRING,

    })

    Meal.associate = function(models) {
        Meal.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
}

//Need a chef table somewhere. So that may be the second log-in, when you create it and all