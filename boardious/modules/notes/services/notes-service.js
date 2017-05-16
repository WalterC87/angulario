'use strict'

angular.module('boardious')
.service('NotesModel', function($http, $q, ENDPOINT_URI){
    var service = this;

    service.get = function(boardId){
        var deferred = $q.defer();
        $http.get(ENDPOINT_URI + "/notes/get/" + boardId)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.post = function(data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/notes/post", data.params)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.put = function(data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/notes/put/" + data.params.id, data.params)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.delete = function(data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/notes/delete/" + data.params.id)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }
});