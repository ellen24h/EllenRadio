/**
 * Created by Ellen on
 */

app.factory('sentimentValues', ['$http', function($http) {
    return $http.get('http://ellenseon.net/sentimentValues')
    //return $http.get('http://localhost:2367/sentimentValues')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
