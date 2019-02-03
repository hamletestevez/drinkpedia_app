angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.tienda', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tienda.html',
        controller: 'tiendaCtrl'
      }
    }
  })

  .state('menu.ordenes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ordenes.html',
        controller: 'ordenesCtrl'
      }
    }
  })

  .state('menu.carrito', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrito.html',
        controller: 'carritoCtrl'
      }
    }
  })

  .state('usuario', {
    url: '/page5',
    templateUrl: 'templates/usuario.html',
    controller: 'usuarioCtrl'
  })

  .state('menu.ajustes', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('crearCuenta', {
    url: '/page10',
    templateUrl: 'templates/crearCuenta.html',
    controller: 'crearCuentaCtrl'
  })

  .state('mapaDeCuenta', {
    url: '/page11',
    templateUrl: 'templates/mapaDeCuenta.html',
    controller: 'mapaDeCuentaCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});