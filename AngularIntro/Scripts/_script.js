var MechanicShop = angular.module('MechanicShop', []);

MechanicShop.controller('MechanicShopController', function ($scope) {
    $scope.cars = [{ "make": "BMW", "model": "330Ci", "year": "2009", "fixed": false }, { "make": "Honda", "model": "Accord", "year": "2013", "fixed": false }, { "make": "Tesla", "model": "ModelX", "year": "2013", "fixed": false }];
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
    $scope.removeCar = function (car) {
        var index = $scope.cars.indexOf(car);
        $scope.cars.splice(index, 1);
    }
});