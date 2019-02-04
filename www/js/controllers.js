angular.module('app.controllers', [])



  .controller('loginCtrl', function ($scope, $stateParams) {

    // END of loginCtrl
  })

  .controller('crearCuentaCtrl', function ($scope, $stateParams) {

    // END of crearCuentaCtrl
  })

  .controller('mapaDeCuentaCtrl', function ($scope, $stateParams) {

    // END of mapaDeCuentaCtrl
  })

  .controller('menuCtrl', function ($scope, $stateParams) {

    // END of menuCtrl
  })

  .controller('homeCtrl', function ($scope, $stateParams) {

    // END of homeCtrl
  })

  .controller('tiendaCtrl', function ($scope, $stateParams, productList, productCartList, $timeout, $state) {

    $scope.productList = productList;
    $scope.productCartList = productCartList;


    $scope.selectProductItemCTA = (item) => {

      helper.animate.itemListSelect(item.id)

    }

    $scope.addItemToCartCTA = (item) => {
      //   console.log(item);
      helper.animate.itemListSelect(item.id)
      helper.saveLocal.saveToCart(item).then((result) => {
        // console.log('done');
        $timeout(() => {
          $scope.productCartList = result;
          //   console.log($scope.productCartList);

        }, 250)
      })

    }

    $scope.goToCartCTA = ()=>{
    $state.go('menu.carrito')
    }


    // select product item from list

    // END of tiendaCtrl
  })

  .controller('ordenesCtrl', function ($scope, $stateParams) {

    // END of ordenesCtrl
  })

  .controller('carritoCtrl', function ($scope, $stateParams, productCartList) {

    $scope.productCartList = productCartList;
    console.log($scope.productCartList);

    // END of carritoCtrl
  })

  .controller('usuarioCtrl', function ($scope, $stateParams) {

    // END of usuarioCtrl
  })

  .controller('ajustesCtrl', function ($scope, $stateParams) {

    // END of ajustesCtrl
  })