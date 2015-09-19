/**
 * Created by Ellen Seon
 */
app.directive('sentimentInput', [ function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'sentimentInput.html'
    };
}]);