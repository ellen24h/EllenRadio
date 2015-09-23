/**
 * Created by Ellen on 2015. 9. 23..
 */

app.factory('sentimentValues', ['$http', function($http) {
    return $http.get('http://ellenseon.net/sentimentValues')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
