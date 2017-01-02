angular.module('fundacaoApp.controllerIndex', ['ngCordova'])

// Como o mapa funcionava perfeitamente online, porem nao funcionava muito bem no android, sera necessario utilizar o comando `ionic plugin add cordova-plugin-geolocation` para solucionar o problema.

.controller('placesCtrl', function($scope, $cordovaGeolocation, $rootScope, $ionicHistory){

  var carregarMapa = function(){
    var options = {
      timeout: 30000,
      enableHighAccuracy: false
    };

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      var staticPosition = new google.maps.LatLng(-1.430311, -48.491162);
      // alert(myLatLng);

      var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        center: staticPosition,
        // draggable: false,
        // zoomControl: false,
        // scrollwheel: false,
        disableDoubleClickZoom: true
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      //Wait until the map is loaded
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
        // Additional Markers //
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.lat, info.long),
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            title: info.place
          });
          marker.content = '<div class="infoWindowContent" style="text-align:center;"><a class="button icon icon-right ion-chevron-right" href="' + info.link + '">Acessar Pagina</a></div>';
          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h6>' + marker.title + '</h6>' + marker.content);
            infoWindow.open($scope.map, marker);
          });
          $scope.markers.push(marker);
        }
        for (i = 0; i < places.length; i++){
          createMarker(places[i]);
        }

      }, function(error){
        alert("Não foi possível reconhecer localização");
      });
    })
  };

  carregarMapa();
})
