var app = angular.module('ionicApp', ['ionic','tabSlideBox'])
app.run(function($ionicPlatform,$ionicSideMenuDelegate,$rootScope) {
    $ionicPlatform.ready(function() {
        $rootScope.sortorder = [1,2,3,4];
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
  .state('intro', {
    url: '/intro',
    templateUrl: 'partials/intro.html',
    controller: 'IntroCtrl'
  })
      .state('index', {
          url : '/',
          templateUrl : 'partials/index.html',
          controller : 'IndexCtrl'
      })

  $urlRouterProvider.otherwise("/");

})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
        $scope.data = {
    numViewableSlides : 0,
    slideIndex : 0,
    initialInstruction : true,
    secondInstruction : false
  };
        $scope.data.slides=[
            {
                'template' : 'partials/1.html',
                'viewable' : true
            },

            {
                'template' : 'partials/2.html',
                'viewable' : true
            },

            {
                'template' : 'partials/3.html',
                'viewable' : true
            }
        ];
        $scope.data.slides.push(
            {
            'template' : 'partials/4.html',
            'viewable' : true
        });
        var countSlides = function() {
    $scope.data.numViewableSlides = 0;
    _.forEach($scope.data.slides, function(slide) {
      if(slide.viewable === true) $scope.data.numViewableSlides++;
    })
    
    console.log($scope.data.numViewableSlides + " viewable slides");
  }
        countSlides();
        $scope.gotohome = function() {
            $state.go("index");
        };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  
  //$scope.showBonus = function() {
  //  var index = _.findIndex($scope.data.slides, { template : 'bonusSlide.html' });
  //  $scope.data.slides[index].viewable = true;
  //  countSlides();
  //  $scope.data.initialInstruction = false
  //  $scope.data.secondInstruction = true;
  //
  //  $ionicSlideBoxDelegate.update();
  //};

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    
    $scope.data.slideIndex = index;
  };
  
});
app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout','$state',
    function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout,$state){

     $scope.gotoSlide = function(index) {
         $state.go("intro");
     };
        $scope.gotobrowse = function(){
            $state.go("intro");
        };
//        	$scope.onSlideMove = function(data){
//				alert("You have selected " + data.index + " tab");
//			};
    }]);
