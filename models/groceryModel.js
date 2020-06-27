
module.exports = function(sequelize, DataTypes) {
    var Grocery = sequelize.define("Grocery", {

        listItem: {
            type: DataTypes.STRING(6000),
            allowNull: true
        },

    });

    Grocery.associate = function(models) {
        Grocery.belongsTo(models.Team, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Grocery;
}