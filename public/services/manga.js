angular.module('MyApp').factory('Manga', ['$resource', function(){
	return $resource('/api/mangas/:_id');
}]);