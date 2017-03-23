angular.module('fundacaoApp', ['ionic','ionic-material',
'fundacaoApp.controllerIndex',
'fundacaoApp.controllerArtes',
'fundacaoApp.controllerLinguagem',
'fundacaoApp.controllerCine',
'fundacaoApp.controllerDetails'])

.run(function($ionicPlatform, ionicMaterialInk) {
  $ionicPlatform.ready(function() {
    ionicMaterialInk.displayEffect();

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  // Desabilita o botão físico do telefone.
  $ionicPlatform.registerBackButtonAction(function(){
    event.preventDefault();
  }, 100);
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // // Menu para página inicial //
  .state('details',{
    url: '/details/:id',
    cache: false,
    templateUrl: 'pages/detail/detail.html',
    controller: 'detailsCtrl'
  })

  .state('menuPlaces', {
    url: '/locais',
    abstract: true,
    templateUrl: 'pages/index/menuPlaces.html'
  })

  .state('menuPlaces.imagens', {
    cache: false,
    url: '/imagens',
    views: {
      'imagensPlaces': {
        templateUrl: 'pages/index/placesImagens.html'
        // ,controller: 'imagensCtrl'
      }
    }
  })

  .state('menuPlaces.mapa', {
    cache: false,
    url: '/mapa',
    views: {
      'mapaPlaces': {
        templateUrl: 'pages/index/placesMapa.html'
        ,controller: 'placesCtrl'
      }
    }
  })

  // Menu para página da Casa das Artes //
  .state('menuArtes', {
    cache: false,
    url: '/artes',
    abstract: true,
    templateUrl: 'pages/casaArtes/menuArtes.html'
  })

  .state('menuArtes.informacoes', {
    cache: false,
    url: '/informacoes',
    views: {
      'informacoesArtes': {
        templateUrl: 'pages/casaArtes/informacoes.html'
        ,controller: 'infoArtesCtrl'
      }
    }
  })

  .state('menuArtes.direcoes', {
    cache: false,
    url: '/direcoes',
    views: {
      'direcoesArtes': {
        templateUrl: 'pages/casaArtes/direcoes.html'
        ,controller: 'direcoesArtesCtrl'
      }
    }
  })

  .state('menuArtes.programacao', {
    cache: false,
    url: '/programacao',
    views: {
      'programacaoArtes': {
        templateUrl: 'pages/casaArtes/programacao.html'
        ,controller: 'programacaoArtesCtrl'
      }
    }
  })

  .state('menuArtes.contatos', {
    cache: false,
    url: '/contatos',
    views: {
      'contatosArtes': {
        templateUrl: 'pages/casaArtes/contatos.html'
        ,controller: 'contatosArtesCtrl'
      }
    }
  })

  // Menu para página da Casa da Linguagem //
  .state('menuLinguagem', {
    cache: false,
    url: '/linguagem',
    abstract: true,
    templateUrl: 'pages/casaLinguagem/menuLinguagem.html'
  })

  .state('menuLinguagem.informacoes', {
    cache: false,
    url: '/informacoes',
    views: {
      'informacoesLinguagem': {
        templateUrl: 'pages/casaLinguagem/informacoes.html'
        ,controller: 'infoLinguagemCtrl'
      }
    }
  })

  .state('menuLinguagem.direcoes', {
    cache: false,
    url: '/direcoes',
    views: {
      'direcoesLinguagem': {
        templateUrl: 'pages/casaLinguagem/direcoes.html'
        ,controller: 'direcoesLinguagemCtrl'
      }
    }
  })

  .state('menuLinguagem.programacao', {
    cache: false,
    url: '/programacao',
    views: {
      'programacaoLinguagem': {
        templateUrl: 'pages/casaLinguagem/programacao.html'
        ,controller: 'programacaoLinguagemCtrl'
      }
    }
  })

  .state('menuLinguagem.contatos', {
    cache: false,
    url: '/contatos',
    views: {
      'contatosLinguagem': {
        templateUrl: 'pages/casaLinguagem/contatos.html'
        ,controller: 'contatosLinguagemCtrl'
      }
    }
  })

  // Menu para página do Cine-Teatro Líbero Luxardo //
  .state('menuCine', {
    cache: false,
    url: '/cine',
    abstract: true,
    templateUrl: 'pages/cineLibero/menuCine.html'
  })

  .state('menuCine.informacoes', {
    cache: false,
    url: '/informacoes',
    views: {
      'informacoesCine': {
        templateUrl: 'pages/cineLibero/informacoes.html'
        ,controller: 'infoCineCtrl'
      }
    }
  })

  .state('menuCine.direcoes', {
    cache: false,
    url: '/direcoes',
    views: {
      'direcoesCine': {
        templateUrl: 'pages/cineLibero/direcoes.html'
        ,controller: 'direcoesCineCtrl'
      }
    }
  })

  .state('menuCine.programacao', {
    cache: false,
    url: '/programacao',
    views: {
      'programacaoCine': {
        templateUrl: 'pages/cineLibero/programacao.html'
        ,controller: 'programacaoCineCtrl'
      }
    }
  })

  .state('menuCine.contatos', {
    cache: false,
    url: '/contatos',
    views: {
      'contatosCine': {
        templateUrl: 'pages/cineLibero/contatos.html'
        ,controller: 'contatosCineCtrl'
      }
    }
  })

  ;

  $urlRouterProvider.otherwise('/locais/imagens');

})

.factory('EventoService',function($http){
  var evento = []; //Private Variable
  var url = "http://www.technikservicos.esy.es/FCP/api/";

  return {
    getEventosCine: function(){
      return $http.get(url+"getEventosCine.php")
      .then(function(response){
        if(response){
          evento = response.data;
          return response;
        }else{
          return false;
        }
      });
    },
    getEventosArtes: function(){
      return $http.get(url+"getEventosArtes.php")
      .then(function(response){
        if(response){
          evento = response.data;
          return response;
        }else{
          return false;
        }
      });
    },
    getEventosLinguagem: function(){
      return $http.get(url+"getEventosLinguagem.php")
      .then(function(response){
        if(response){
          evento = response.data;
          return response;
        }else{
          return false;
        }
      });
    },
    getEvento: function(eventoId){
      for(i=0;i<evento.length;i++){
        // return console.log(evento[i]);
        if(evento[i].id_evento == eventoId){
          return evento[i];
        }
      }
    }
  }
});

var places =
[
  {
    place : 'Cine-Teatro Líbero Luxardo',
    link : '#/cine/informacoes',
    lat : -1.456579,
    long : -48.486339
  },
  {
    place : 'Casa das Artes',
    link : '#/artes/informacoes',
    lat : -1.453135,
    long : -48.481053
  },
  {
    place : 'Casa da Linguagem',
    link : '#/linguagem/informacoes',
    lat : -1.453786,
    long : -48.49243
  }
];
