'use strict';

angular.module('boardious')
  .controller('MainCtrl', function ($state) {
    var main = this;
    main.currentColor = 'blue';

    main.colors = [
      'blue',
      'green',
      'orange',
      'red',
      'yellow'
    ];

    main.setCurrentColor = function(color) {
      main.currentColor = color;
    };
});
