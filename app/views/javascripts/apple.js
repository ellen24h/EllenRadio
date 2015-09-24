/**
 * Created by Ellen
 */

var app = angular.module('UlivearthApp', ['ngRoute', 'chart.js']);

app.config(function($routeProvider, ChartJsProvider){
        $routeProvider
        .when('/', {
            controller: 'InputController',
            templateUrl: '/directives/input.html'
        })
        .when('/analysis', {
            controller: "analysisController",
            templateUrl: '/directives/analysis.html'
        })
        .otherwise({
            redirectTo: '/'
        });
        ChartJsProvider.setOptions({
            Colours: ['#FF5252', '#FF8A80'],
            responsive: false

        });
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    });

//app.config(['ChartJsProvider'], function ($routeProvider, ChartJsProvider) {
//    $routeProvider
//        .when('/', {
//            controller: 'InputController',
//            templateUrl: '/directives/input.html'
//        })
//        .when('/analysis', {
//            controller: "ChartController",
//            templateUrl: '/directives/analysis.html'
//        })
//        .otherwise({
//            redirectTo: '/'
//        });
//    ChartJsProvider.setOptions({
//        Colours: ['#FF5252', '#FF8A80'],
//        responsive: false
//
//    });
//    ChartJsProvider.setOptions('Line', {
//        datasetFill: false
//    });
//});

//정상동작시작
//var app = angular.module('UlivearthApp', ['ngRoute', 'ng-fusioncharts']);
//
//app.config(function ($routeProvider) {
//    console.log("why?");
//
//    $routeProvider
//        .when('/', {
//            controller: 'InputController',
//            templateUrl: '/directives/input.html'
//        })
//        .when('/analysis', {
//            controller: 'ChartController',
//            templateUrl: '/directives/analysis.html'
//        })
//        .otherwise({
//            redirectTo: '/'
//        });
//});
//정상동작끝
//
//var app = angular.module('UlivearthApp', ['ngRoute']);
//app.config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            controller: 'InputController',
//            templateUrl: '/directives/input.html'
//        })
//});