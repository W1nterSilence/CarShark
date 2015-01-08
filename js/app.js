var app = angular.module('carshark',[]);
app.controller('NavController',function(){

});

app.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl:'navbar.html'
	};
});