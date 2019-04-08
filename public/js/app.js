var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/public/pages/main.html',
            controller: 'mainController'
        })
        .when('/aboutus', {
            templateUrl: '/public/pages/aboutus.html',
            controller: 'aboutusController'
        })
        .when('/projects', {
            templateUrl: '/public/pages/projects.html',
            controller: 'projectsController'
        })
        .when('/contactus', {
            templateUrl: '/public/pages/contactus.html',
            controller: 'contactusController'
        })
        .when('/contactus', {
            templateUrl: '/public/pages/contactus.html',
            controller: 'contactusController'
        })
        .when('/projects/:name', {
            templateUrl: function (urlattr) {
                return '/public/resources/img/projects/' + urlattr.name + '/viewimg.html';
            },
            controller: 'projectsImgController'
        })
        .when('/coming', {
            templateUrl: '/public/pages/coming.html',
            controller: 'comingController'
        })
        .when('/construction', {
            templateUrl: '/public/pages/construction.html',
            controller: 'constructionController'
        })
        .when('/construction/:name', {
            templateUrl: function (urlattr) {
                return '/public/resources/img/construction/' + urlattr.name + '/viewimg.html';
            },
            controller: 'constructionController'
        })
        .when('/coming/:name', {
            templateUrl: function (urlattr) {
                return '/public/resources/img/coming/' + urlattr.name + '/viewimg.html';
            },
            controller: 'comingController'
        })

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('aboutusController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('projectsController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('contactusController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('projectsImgController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('comingController', ['$scope', '$log', function ($scope, $log) {}]);
myApp.controller('constructionController', ['$scope', '$log', function ($scope, $log) {}]);
