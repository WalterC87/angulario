module.exports = function(sequelize, DataTypes){
    var Notes = sequelize.define('Notes', {
        noteTitle: {
            type: DataTypes.STRING
        },
        noteDescription: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {        
        freezeTableName: true,
        tableName: 'notes'
    });

    return Notes;
}