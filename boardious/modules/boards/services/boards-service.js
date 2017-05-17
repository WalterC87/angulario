'use strict'

angular.module('boardious')
.service('BoardsModel', function($http, $q, ENDPOINT_URI){
    var service = this;

    service.get = function(){
        var deferred = $q.defer();
        $http.get(ENDPOINT_URI + "/boards/get/" + boardId)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.getId = function(boardId){
        var deferred = $q.defer();
        $http.get(ENDPOINT_URI + "/boards/get/id/" + boardId)
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
        $http.post(ENDPOINT_URI + "/boards/post", data)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.put = function(id,data){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/boards/put/" + id, data)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }

    service.delete = function(id){
        var deferred = $q.defer();
        $http.post(ENDPOINT_URI + "/boards/delete/" + id)
        .success(function(response){
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    }
});