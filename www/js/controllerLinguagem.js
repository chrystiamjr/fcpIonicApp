angular.module('fundacaoApp.controllerLinguagem', ['ngCordova'])

.controller('infoLinguagemCtrl',function($scope, $state) {
  $scope.goBack = function() {
    $state.go('menuPlaces.imagens');
  }
})

.controller('direcoesLinguagemCtrl', function($scope,$state,$cordovaGeolocation,$ionicHistory){
  $scope.goBack = function() {
    $state.go('menuPlaces.imagens');
  }

  var mapaLinguagem = function(){
    var targetlatLng = null;
    var options = {
      timeout: 30000,
      enableHighAccuracy: false
    };

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    // get user current user location
    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
      // user & target position
      var originlatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      targetlatLng = new google.maps.LatLng(-1.453786, -48.49243);

      var mapOptions = {
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: originlatLng,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };

    // instantiate a map object
    $scope.map = new google.maps.Map(document.getElementById("mapLinguagem"), mapOptions);

      var calcRoute = (function () {
        var request = {
          origin: originlatLng,
          destination: targetlatLng,
          travelMode: google.maps.TravelMode.DRIVING,
          optimizeWaypoints: true,
          provideRouteAlternatives: true,
        };
        directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      })();
      google.maps.event.addListenerOnce($scope.map, 'idle', function () {
        directionsDisplay.setMap($scope.map);
        $scope.directions = directionsDisplay.setPanel(document.getElementById("directionsLinguagem")); // Mostra direções no id directions
      })

      // wait until the map is loaded
      // $scope.directions = directionsDisplay.setPanel(document.getElementById("directionsArtes"));
    });
  }
  mapaLinguagem();
})

.controller('programacaoLinguagemCtrl',function($scope, $state, EventoService, $timeout) {

  $scope.noContent = false;
  $scope.loading = true;

  $scope.goBack = function() {
    $state.go('menuPlaces.imagens');
  }

  EventoService.getEventosLinguagem().then(function(resp){
    // console.log(resp);
    if(resp.data){
      $scope.dadosLinguagem = resp.data;
      // console.log($scope.dadosCine);
      $scope.loading = false;
      $scope.noContent = false;
    } else{
      $scope.noContent = true;
      $scope.loading = false;
    }
  });

})

.controller('contatosLinguagemCtrl',function($scope, $state, $cordovaInAppBrowser) {

  $scope.goBack = function() {
    $state.go('menuPlaces.imagens');
  }

  $scope.enviarEmail = function(mail){

    if(mail && mail.assunto && mail.mensagem){

      var dados = "mailto:chrystiamjr@gmail.com?subject="+mail.assunto+"&body="+mail.mensagem;

      $cordovaInAppBrowser.open(dados, '_system');
    }
  }
})
