var scheduleInfo = { 
                     startDate : new Date( 2016,10,24,09,00,00,00) ,
                     names : [ "lobaugj", "gaodeng" ]
                   }
;  


var module_ = angular.module('scheduleModule', []);
var controller_ = module_.controller('scheduleController', ['$scope', 'scheduleService', function($scope,scheduleService) {
  $scope.scheduleInfo = {};
  $scope.scheduleInfo.names = scheduleInfo.names;
  $scope.scheduleInfo.startDate = scheduleInfo.startDate;
  $scope.calculateSchedule = function ()
  { 
    $scope.scheduleItems = scheduleService.getSchedule( $scope.scheduleInfo.names, $scope.scheduleInfo.startDate );
  }; // end calculate schedule
  } // end controller
]);

var service_ = module_.service( 'scheduleService', [ '$window', function (window_) {
  this.getSchedule = function ( names, startDate )
  {
    return window_.jlSchedule.getSchedule(names, startDate);

  }  


}]
);

var directive_ = controller_.directive('myCustomer', function() {
  return {
     restrict: 'E',
     scope: { 
              customerInfo: '=info' 
            },
      templateUrl : "customer.html" 
    }
   } 
);

var templateUrl_ = function(elem, attr) { 
return "customer.html"; };

