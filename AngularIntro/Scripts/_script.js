var MechanicShop = angular.module('MechanicShop', []);

MechanicShop.controller('MechanicShopController', function ($scope) {
    $scope.cars = [];
    $scope.addCar = function () {
        var car = {};
        car.make = $scope.make;
        car.model = $scope.model;
        car.year = $scope.year;
        car.fixed = false;
        $scope.cars.push(car);
        $scope.make = ''
        $scope.model = ''
        $scope.year = ''
    }
});