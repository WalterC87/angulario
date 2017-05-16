module.exports = function(sequelize, DataTypes){
    var Boards = sequelize.define('boards', {
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
        freezeTableName: true,
        tableName: 'boards'
    });

    return Boards;
}