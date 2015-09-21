/**
 * Created by Ellen Seon
 */
angular.module('sentimentModule', [])
    .directive('sentimentInput', [ function() {
    return {
        restrict: 'E',
        templateUrl: 'javascripts/directives/sentimentInput.html'
    };
}]);
