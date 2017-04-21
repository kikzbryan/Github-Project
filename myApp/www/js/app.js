// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('Simple', {
    url: '/Simple',
    templateUrl: 'templates/Simple.html',

  });

  $stateProvider.state('Home', {
    url: '/Home',
    templateUrl: 'templates/Home.html',

  });

  $stateProvider.state('Compound', {
    url: '/Compound',
    templateUrl: 'templates/Compound.html',

  });

  $urlRouterProvider.otherwise('/Home');
});

app.controller('IntrestCtrl',
  function calculate($scope, $state) {
    $scope.principal = 0;
    $scope.rate = 0;
    $scope.time = 0;
    var grandTotal = '';
    $scope.calculate = function () {
      grandTotal = $scope.principal * (1 + ($scope.rate / 100) * $scope.time);
      //grandTotal = ($scope.principal*$scope.rate*$scope.terms/100);
      return grandTotal;
    }
    $scope.interest = function calculate() {
      var interestOnly = grandTotal;
      return interestOnly;
    };
  });


app.controller('CompoundCtrl',
  function calculate($scope, $state) {
    $scope.principal = 0;
    $scope.rate = 0;
    $scope.time = 0;
    var grandTotal = 0;
    $scope.calculate = function () {
      grandTotal = $scope.principal * (1 + ($scope.rate / 100) * $scope.time);
      return grandTotal;
    }
    $scope.interest = function calculate() {
      var interestOnly = grandTotal - $scope.principal;
      return interestOnly;
    };
  });


