var app = angular.module('save-my-gas.controllers');

app.controller('GasStationCtrl', function($scope) {
  $scope.playlists = [
    { title: 'gas station #1', id: 1 },
    { title: 'gas station #2', id: 2 },
    { title: 'gas station #3', id: 3 },
    { title: 'gas station #4', id: 4 },
    { title: 'gas station #5', id: 5 },
    { title: 'gas station #6', id: 6 }
  ];
});
