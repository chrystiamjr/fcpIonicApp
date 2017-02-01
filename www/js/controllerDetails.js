angular.module('fundacaoApp.controllerDetails', [])

.controller('detailsCtrl',function($scope, $state, $stateParams, $ionicHistory, EventoService) {

  $scope.goHome = function() {
    $state.go('menuPlaces.imagens');
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  var eventoId = $stateParams.id;
  console.log(eventoId);
  $scope.dados = EventoService.getEvento(eventoId);
})
