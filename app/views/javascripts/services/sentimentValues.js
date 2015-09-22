/**
 * Created by Ellen
 */
app.factory('sentimentValues', ['$http', function($http) {
    return $http.get('http://localhost:3000/sentimentValues')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);