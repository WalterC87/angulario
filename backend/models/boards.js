module.exports = function(sequelize, DataTypes){
    var Boards = sequelize.define('Boards', {
        boardTitle: {
            type: DataTypes.STRING
        },
        boardDescription: {
            type: DataTypes.TEXT
        },
        boardAvatar: {
            type: DataTypes.STRING(350),
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models){
                Boards.hasMany(models.Notes);
            }
        },
        freezeTableName: true,
        tableName: 'boards'
    });

    return Boards;
}