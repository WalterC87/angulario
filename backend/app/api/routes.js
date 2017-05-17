var express = require('express');
var router = express.Router();
var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var controllers = {},
	controllers_path = process.cwd() + '/app/controllers';

fs.readdirSync(controllers_path).forEach(function (file){
	if(file.indexOf('.js') != -1){
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
})

var routesController = function(server){
    server.get("/boards/get", controllers.boardController.get);
    server.get("/boards/getId/:id", controllers.boardController.getId);
    server.post("/boards/post", controllers.boardController.post);
    server.post("/board/upload/image", multipartMiddleware, controllers.boardController.uploadImage);
    server.post("/boards/put/:id", controllers.boardController.put);
    server.post("/boards/delete/:id", controllers.boardController.delete);

    server.get("/notes/get/:BoardId", controllers.noteController.get);
    server.post("/notes/post", controllers.noteController.post);
    server.post("/notes/put/:id", controllers.noteController.put);
    server.post("/notes/delete/:id", controllers.noteController.delete);
};

module.exports = routesController;