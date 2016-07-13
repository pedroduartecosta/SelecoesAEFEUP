angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

    .state('tabsController.matches', {
    url: '/matches',
    views: {
      'tab1': {
        templateUrl: 'templates/matches.html',
        controller: 'matchesCtrl'
      }
    }
  })

  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab2': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('tabsController.teams', {
    url: '/teams',
    views: {
      'tab3': {
        templateUrl: 'templates/teams.html',
        controller: 'teamsCtrl'
      }
    }
  })

  .state('tabsController.options', {
    url: '/options',
    views: {
      'tab4': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl'
      }
    }
  })

  .state('tabsController.teamDetails', {
    url: '/teams/:teamId',
    views: {
      'tab3': {
        templateUrl: 'templates/teamDetails.html',
        controller: 'teamDetailsCtrl'
      }
    }
  })
  
   .state('tabsController.matchDetails', {
    url: '/matches/:matchId',
    views: {
      'tab1': {
        templateUrl: 'templates/matchDetails.html',
        controller: 'matchDetailsCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/tabs/matches')

  

});