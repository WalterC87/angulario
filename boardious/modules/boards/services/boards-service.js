'use strict'

angular.module('boardious')
.service('BoardsModel', function($http, $q, ENDPOINT_URI){
    var service = this;

    service.get = function(){
        var deferred = $q.defer();
        $http.get(ENDPOINT_URI + "/boards/get")
        .then(function (response){
            deferred.resolve(response);
        }, function(response){
            deferred.resolve(response);
        });

        return deferred.promise;
    }

    service.getId = function(boardId){
        var deferred = $q.defer();
        $http.get(ENDPOINT_URI + "/boards/getId/" + boardId)
        .then(function (response){
            deferred.resolve(response);
        }, function(response){
            deferred.resolve(response);
        });

        return deferred.promise;
    }

    service.post = function(data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/boards/post", data)
        .then(function (response){
            deferred.resolve(response);
        }, function(response){
            deferred.resolve(response);
        });

        return deferred.promise;
    }

    service.put = function(data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/boards/put/" + data.id, data)
        .then(function (response){
            deferred.resolve(response);
        }, function(response){
            deferred.resolve(response);
        });

        return deferred.promise;
    }

    service.delete = function(id){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/boards/delete/" + id)
        .then(function (response){
            deferred.resolve(response);
        }, function(response){
            deferred.resolve(response);
        });

        return deferred.promise;
    }
});