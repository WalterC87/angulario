'use strict';

angular.module('boardious', [
    'ui.router', 
    'ui.bootstrap',
    'ngAnimate'
])
    .constant('ENDPOINT_URI', 'http://localhost:3000')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/boards');

        $stateProvider
            .state('boards', {
                url: '/boards',
                templateUrl: 'modules/boards/templates/boards-mdv.tmpl.html',
                controller: 'BoardsCtrl',
                controllerAs: 'ctrl'
            .state('notes', {
                url: '/boards/:boardId/notes',
                templateUrl: 'modules/notes/templates/notes-mdv.tmpl.html',
                controller: 'NotesCtrl',
                controllerAs: 'ctrl'
            })
        })
    })
;
    

