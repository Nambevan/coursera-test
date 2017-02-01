(function(){
   'use strict';
   angular.module('LunchCheck',[])
       .controller('LunchCheckController', function($scope){
           $scope.dishes = "";
           $scope.checkMessage = "";
           $scope.checkLunchItems = function () {

                var dishesCount =  $scope.dishes.split([,[]]).length;

                   if ($scope.dishes == "") {
                       $scope.checkMessage = "Please enter data first!"
                   }else if(dishesCount>=4) {
                       $scope.checkMessage = "Too much!"
                   }else{
                       $scope.checkMessage = "Enjoy!"
                   }
                console.log(dishesCount);
           }
       });
})();

