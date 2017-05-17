angular.module('boardious')
  .directive('colorPicker', function(){

    return {
      restrict : 'E',
      scope: true,
      replace: true,
      templateUrl: 'modules/main/templates/colorpicker.tmpl.html',
      link : function (scope, element, attrs) {
        scope.collapsed = true;
      }
    }
  })
;
