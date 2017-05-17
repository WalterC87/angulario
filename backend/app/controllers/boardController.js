var models = require("../../models");
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CDN_NAME,
	api_key: process.env.CDN_API_KEY,
	api_secret: process.env.CDN_API_SECRET
});

var sendJSONresponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

exports.uploadImage = function(req, res, next){
	cloudinary.uploader.upload(req.files.file.path, function(result, callback){
		sendJSONresponse(res,200, {"type":true,"data": result});
	});
};

exports.get = function(req, res, next){
    models.Boards.findAll({
        where: {
            status: 1
        }
    }).then(function (data){
        if(!data){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al obtener los boards "});
        }else{
            sendJSONresponse(res, 200, {"type": true, "data": data});
        }
    })
}

exports.post = function(req, res, next){
    models.Boards.create({
        boardTitle: req.body.title,
        boardDescription: req.body.description,
        boardAvatar: req.body.boardAvatar || null
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al crear el Board "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
};

exports.put = function(req, res, next){
    models.Boards.update({
        boardTitle: req.body.boardTitle,
        boardDescription: req.body.boardDescription
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al actualizar el Board "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
};

exports.delete = function(req, res, next){
    models.Boards.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (board){
        if(!board){
            sendJSONresponse(res, 400, {"type": false, "message": "Error al eliminar el Board "});
        }else{
            sendJSONresponse(res, 200, {"type": true});
        }
    })
}