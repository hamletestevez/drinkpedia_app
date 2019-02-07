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

  .controller('menuCtrl', function ($scope, $stateParams, $state) {

    $scope.menuOptionAction = (page) => {
      console.log(page);

    }
    // END of menuCtrl
  })



  .controller('homeCtrl', function ($scope, $stateParams) {

    // END of homeCtrl
  })

  .controller('tiendaCtrl', function ($scope, $stateParams, productList, productCartList, $timeout, $state, $ionicLoading, $ionicPopup) {

    $scope.productList = productList;
    $scope.productCartList = productCartList;
    $scope.$on("$ionicView.enter", function (event, data) {
      $scope.productCartList = helper.saveLocal.getLocalCart();
      // console.log($scope.productCartList);
    });

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
          $ionicLoading.show({
            template: "Producto agregado al carrito...",
            duration: 2500
          })

        }, 250)
      })

    }

    $scope.goToCartCTA = () => {
      $state.go('menu.carrito')
    }



    $scope.selecterPopup = {
      decress: () => {

        if ($scope.defaultSelectValue <= 1) {
          $scope.defaultSelectValue = 1
        } else {
          $scope.defaultSelectValue = $scope.defaultSelectValue - 1
        }

      },
      incress: () => {
        $scope.defaultSelectValue = $scope.defaultSelectValue + 1

      }

    }
    $scope.changeSelectInput = (input) => {
      console.log(input);
      $scope.defaultSelectValue = input;
    }
    $scope.addQuantityCTA = (item, index) => {
      $scope.defaultSelectValue = 2;

      $ionicPopup.show({
        scope: $scope,
        cssClass: "customSelectPopup",
        template: "<div><div class='selectIncrementButtons'><a ng-click='selecterPopup.decress()'><i class='button ion-chevron-left button-clear button-dark'></i></a><label class='item item-input'><input type='number' ng-model='defaultSelectValue' ng-change='changeSelectInput(defaultSelectValue)'></label><a ng-click='selecterPopup.incress()'><i class='button ion-chevron-right button-clear button-dark'></i></a></div><div></div></div>",
        buttons: [{
          text: "Select",
          type:"button-light",
          onTap: () => {
            console.log($scope.defaultSelectValue);
            $scope.productList[index].selectedQuantity = $scope.defaultSelectValue;
          }
        }]
      })
    }



    // select product item from list

    // END of tiendaCtrl
  })

  .controller('ordenesCtrl', function ($scope, $stateParams) {

    // END of ordenesCtrl
  })

  .controller('carritoCtrl', function ($scope, $stateParams, productCartList, $ionicPopup, $ionicLoading) {
    $scope.productCartList = productCartList;

    $scope.$on("$ionicView.enter", function (event, data) {
      $scope.productCartList = helper.saveLocal.getLocalCart();

      var v = 0;
      var q = 0;
      for (var i = 0; $scope.productCartList.length > i; i++) {
        v = $scope.productCartList[i].itemTotal + v;
        q = $scope.productCartList[i].selectedQuantity + q;

      };
      var it = ((v * 18) / 100) + v;
      $scope.totalProductsDetails = {
        totalProducts: q,
        productTotalValue: v,
        productsTax: it

      }
      console.log($scope.totalProductsDetails);
    });

    $scope.cancelCartCTA = () => {
      $ionicPopup.show({
        title: "Eliminar Carrito",
        subTitle: "Esta seguro que desea eliminar el carrito?",
        buttons: [{
          text: "Cancelar"
        }, {
          text: "Si",
          type: "button-assertive",
          onTap: () => {

            helper.saveLocal.clearLocalCart().then(() => {
              $scope.productCartList = [];
              console.log('clear');
              $ionicLoading.show({
                template: "Carrito eliminado...",
                duration: 2500
              })
            })
          }
        }]
      })
    }


    // END of carritoCtrl
  })

  .controller('usuarioCtrl', function ($scope, $stateParams) {

    // END of usuarioCtrl
  })

  .controller('ajustesCtrl', function ($scope, $stateParams) {

    // END of ajustesCtrl
  })