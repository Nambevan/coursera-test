(function(){

    'use strict';

    angular.module('LunchCheck',[])

        .controller('LunchCheckController', function($scope){

            $scope.CheckIfTooMuch = function () {
                var dishes = document.getElementById('lunch-menu').value;
                var len = dishes.split([,[]]);
                var x = document.getElementById('mss');
                var dish = 0;
                for( var item in len){
                    dish = dish + 1;
                }
                if(dish>=4){
                    x.innerHTML = "Too much!";
                }else if(!dishes || 0 === dishes.length){
                    x.innerHTML = "Please enter data first!";
                }else{
                    x.innerHTML = "Enjoy!";
                }
                console.log(len);
            };
        });
})();