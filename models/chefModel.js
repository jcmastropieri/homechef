
module.exports = function(sequelize, DataTypes) {
    var Chef = sequelize.define("Chef", {
        chefName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chefImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chefFoodConsiderations: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Chef.associate = function(models) {
        Chef.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Chef;
}