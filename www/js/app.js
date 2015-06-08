// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-gallery'])

//directive for a fake status bar
.directive('fakeStatusbar', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="fake-statusbar"><div class="pull-left">Carrier</div><div class="time">3:30 PM</div><div class="pull-right">50%</div></div>'
  }
})

.directive('navBarClass', function() {
  return {
    restrict: 'A',
    compile: function(element, attrs) {

      // We need to be able to add a class the cached nav-bar
      // Which provides the background color
      var cachedNavBar = document.querySelector('.nav-bar-block[nav-bar="cached"]');
      var cachedHeaderBar = cachedNavBar.querySelector('.bar-header');

      // And also the active nav-bar
      // which provides the right class for the title
      var activeNavBar = document.querySelector('.nav-bar-block[nav-bar="active"]');
      var activeHeaderBar = activeNavBar.querySelector('.bar-header');
      var barClass = attrs.navBarClass;
      var ogColors = [];
      var colors = ['positive', 'stable', 'light', 'royal', 'dark', 'assertive', 'calm', 'energized'];
      var cleanUp = function() {
        for (var i = 0; i < colors.length; i++) {
          var currentColor = activeHeaderBar.classList.contains('bar-' + colors[i]);
          if (currentColor) {
            ogColors.push('bar-' + colors[i]);
          }
          activeHeaderBar.classList.remove('bar-' + colors[i]);
          cachedHeaderBar.classList.remove('bar-' + colors[i]);
        }
      };
      return function($scope) {
        $scope.$on('$ionicView.beforeEnter', function() {
          cleanUp();
          cachedHeaderBar.classList.add(barClass);
          activeHeaderBar.classList.add(barClass);
        });
        $scope.$on('$ionicView.beforeLeave', function() {
          for (var j = 0; j < ogColors.length; j++) {
            activeHeaderBar.classList.add(ogColors[j]);
            cachedHeaderBar.classList.add(ogColors[j]);
          }
          cachedHeaderBar.classList.remove(barClass);
          activeHeaderBar.classList.remove(barClass);
          ogColors = [];
        });
      };
    }
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.tour',{
    url: "/tour",
    views: {
      'menuContent':{
        templateUrl: "templates/tour.html"
      }
    }
  })

  .state('app.gallery', {
    url: "/gallery",
    views: {
      'menuContent': {
        templateUrl: "templates/gallery.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.doctors',{
      url: "/doctors",
      views: {
        'menuContent':{
          templateUrl: "templates/doctors.html",
          controller: "DoctorsCtrl"
        }
      }
    })

  .state('app.leinster', {
    url: "/provinces/:provinceId",
    views: {
      'menuContent': {
        templateUrl: "templates/leinster.html",
        controller: 'ProvincesCtrl'
      }
    }
  })

  .state('app.munster', {
    url: "/provinces/:provinceId",
    views: {
      'menuContent': {
        templateUrl: "templates/munster.html",
        controller: 'MunsterCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tour');
});
