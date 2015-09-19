/**
 * Created by Ellen on 2015. 9. 20..
 */
angular.module('sentimentModule', [])
    .directive('sentimentAnalysis', [ function() {
        return {
            restrict: 'E',
            templateUrl: 'javascripts/directives/sentimentAnalysis.html'
        };
    }]);