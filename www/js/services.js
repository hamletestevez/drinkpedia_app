angular.module('app.services', [])

.factory("productList",function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref('/products/');

    return $firebaseArray(ref);
  }
);