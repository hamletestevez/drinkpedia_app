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

    $scope.selectPopupAction = (selectedNumber, item) => {
      console.log(selectedNumber);
      console.log(item);
    }

    $scope.addQuantityCTA = (item) => {

      $ionicPopup.show({
        scope: $scope,
        cssClass: 'customSelectPopup',
        buttons: [{
            text: "2",
            type: "button-light button-block",
            onTap: () => {
              $scope.selectPopupAction(2, item)
            }
          },
          {
            text: "3",
            type: "button-light button-block",
            onTap: () => {
              $scope.selectPopupAction(3, item)
            }
          },
          {
            text: "4",
            type: "button-light button-block",
            onTap: () => {
              $scope.selectPopupAction(4, item)
            }
          },
          {
            text: "5",
            type: "button-light button-block",
            onTap: () => {
              $scope.selectPopupAction(5, item)
            }
          },
          {
            text: "mas de 5",
            type: "button-light button-block",
            onTap: () => {
              $scope.selectPopupAction('more', item)
            }
          }
        ]
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

      var v = 0
      for (var i = 0; $scope.productCartList.length > i; i++) {
        v = $scope.productCartList[i].itemTotal + v;

      };
      var it = ((v * 18) / 100) + v;
      $scope.totalProductsDetails = {
        totalProducts: $scope.productCartList.length,
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