module.exports = function(sequelize, DataTypes) {
    var Meal = sequelize.define("Meal", {
        mealDay: DataTypes.STRING,
        mealTime: DataTypes.STRING,
        //This mealSearched is what giphy uses
        mealSearched: DataTypes.STRING,
        //Makes strings bigger
        recipeTitle: DataTypes.STRING(5000),
        recipeIngredients: DataTypes.STRING(5012), 
        recipeInstructions: DataTypes.STRING(5012),
        mealChef: DataTypes.STRING

    });

    //Associates Meal to Team
    Meal.associate = function(models) {
        Meal.belongsTo(models.Team, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Meal;
}



