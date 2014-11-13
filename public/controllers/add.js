angular.module('MyApp').controller('AddCrtl', ['$scope', '$alert', 'Manga', function ($scope, $alert, Manga){
	$scope.addManga = function (){
		Manga.save({mangaName: $scope.mangaName},
			function() {
				$scope.mangaName = '';
				$scope.addForm.$setPristine();
				$alert({
					content: 'Manga has been added',
					placement: 'top-right',
					type: 'success',
					duration: 3	
				});
			},
			function (response){
				$scope.mangaName = '';
				$scope.addForm.$setPristine();
				$alert({
					 content: response.data.message,
					 placement: 'top-right',
		             type: 'danger',
		             duration: 3
				});
			});
	};
}]);