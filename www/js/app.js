// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','tabSlideBox'])

.run(function($ionicPlatform,$ionicSideMenuDelegate,$rootScope) {
  $ionicPlatform.ready(function() {
      $rootScope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();
      };
      $rootScope.login = function() {
          $scope.modal.show();
      };
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('search', {
    url: "/search",
        templateUrl: "templates/search.html"
  })

  .state('browse', {
    url: "/browse",
        templateUrl: "templates/browse.html"
  })
    .state('playlists', {
      url: "/playlists",
          templateUrl: "templates/playlists.html",
          controller: 'IndexCtrl'
    })

  .state('single', {
    url: "/playlists/:playlistId",
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/playlists');
});
