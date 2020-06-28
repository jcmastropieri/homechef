
module.exports = function(sequelize, DataTypes) {
    var Grocery = sequelize.define("Grocery", {

        listItem: {
            //allows for bigger string
            type: DataTypes.STRING(6000),
            allowNull: true
        },

    });

    //Associates Grocery to team
    Grocery.associate = function(models) {
        Grocery.belongsTo(models.Team, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Grocery;
}