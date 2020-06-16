module.exports = function(sequelize, DataTypes) {
    var Meal = sequelize.define("Meal", {
        mealDay: DataTypes.STRING,
        mealTime: DataTypes.STRING,
        //This mealSearched is what giphy uses
        mealSearched: DataTypes.STRING,
        recipeTitle: DataTypes.STRING,
        recipeIngredients: DataTypes.BLOB,
        recipeInstructions: DataTypes.BLOB,
        mealChef: DataTypes.STRING

    })

    Meal.associate = function(models) {
        Meal.belongsTo(models.Team, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Meal;
}



//Need a chef table somewhere. So that may be the second log-in, when you create it and all