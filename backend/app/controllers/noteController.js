var models = require("../../models");

var sendJSONresponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

exports.get = function(req, res, next){
    models.Notes.findAll({
        where: {
            BoardId: req.params.boardId,
            status: 1
        }
    }).then(function (data){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al obtener las notas "});
        }else{
            sendJSONresponse(res, 200, {"type": true, "data": data});
        }
    })
}

exports.post = function(req, res, next){
    models.Notes.create({
        noteTitle: req.body.title,
        noteDescription: req.body.content,
        BoardId: req.body.boardId || null
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al crear la Nota "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
};

exports.put = function(req, res, next){
    models.Notes.update({
        noteTitle: req.body.title,
        noteDescription: req.body.content
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al actualizar la Nota "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
};

exports.delete = function(req, res, next){
    models.Notes.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al eliminar la Nota "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
}