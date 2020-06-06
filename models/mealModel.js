module.exports = function(sequelize, DataTypes) {
    var Meal = sequelize.define("Meal", {
        mealDay: DataTypes.STRING,
        mealTime: DataTypes.STRING,
        //This mealSearched is what giphy uses
        mealSearched: DataTypes.STRING,
        recipeTitle: DataTypes.STRING,
        recipeIngredients: DataTypes.STRING,
        //This needs to tie into the Chef table, may need to be an integer
        //Or I may need some code that checks this string to the chef id integer
        //May not need to do that here
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