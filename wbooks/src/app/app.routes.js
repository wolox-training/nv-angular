angular.module('store').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('centered.login');
    });

    // Now set up the states
    $stateProvider
      .state('centered', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/centered/centered.html'
          }
        }
      })
      .state('centered.dashboard', {
        url: '/dashboard',
        views: {
          content: {
            templateUrl: '../app/components/centered/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
          }
        }
      })
      .state('centered.detail', {
        url: '/detail',
        views: {
          content: {
            templateUrl: '../app/components/centered/detail/detail.html',
            controller: 'DetailController',
            controllerAs: 'detail'
          }
        }
      })
      .state('centered.login', {
        url: '/login',
        views: {
          content: {
            templateUrl: '../app/components/centered/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
          }
        }
      })
      .state('centered.signup', {
        url: '/signup',
        views: {
          content: {
            templateUrl: '../app/components/centered/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'signup'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
