angular.module('MyApp')
  .controller('HomeCrtl', ['$scope', '$http', function ($scope, $http){
    $http.get('assets/mangas.json').success(function(data){
      $scope.mangaData = data;
    });
  }
]);