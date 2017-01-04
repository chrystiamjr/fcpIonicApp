// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('fundacaoApp', ['ionic','fundacaoApp.controllerIndex', 'fundacaoApp.controllerArtes', 'fundacaoApp.controllerCine'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // Menu para página inicial //
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

});

var places =
[
  {
    place : 'Fundação Cultural do Pará Tancredo Neves',
    link : '#',
    lat : -1.456579,
    long : -48.486339
  },
  {
    place : 'Núcleo de Oficinas Curro Velho',
    link : '#',
    lat : -1.430311,
    long : -48.491162
  },
  {
    place : 'Casa das Artes',
    link : '#/artes/informacoes',
    lat : -1.453135,
    long : -48.481053
  },
  {
    place : 'Casa da Linguagem',
    link : '#',
    lat : -1.453786,
    long : -48.49243
  },
  {
    place : 'Teatro Experimental Waldemar Henrique',
    link : '#',
    lat : -1.452658,
    long : -48.49497
  }
];
