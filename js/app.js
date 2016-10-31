angular.module('starter', [])

/*main controller*/
.controller('main', function($scope, $http) {
    $scope.mass;
    
    $http.get("js/service.json")
    .then(function(response) {
        $scope.massless = response.data;
    });
    
});