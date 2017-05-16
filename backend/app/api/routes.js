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
    server.post("/boards/post", controllers.boardController.post);
    server.post("/board/upload/image", multipartMiddleware, controllers.boardController.uploadImage);
    server.put("/boards/put/:id", controllers.boardController.put);
    server.delete("/boards/delete/:id", controllers.boardController.delete);

    server.get("/notes/get/:BoardId", controllers.boardController.get);
    server.post("/notes/post", controllers.boardController.post);
    server.put("/notes/put/:id", controllers.boardController.put);
    server.delete("/notes/delete/:id", controllers.boardController.delete);
};

module.exports = routesController;