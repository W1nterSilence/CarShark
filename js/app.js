var app = angular.module('carshark',[]);
app.controller('NavController',function(){

});

app.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl:'html/navbar.html'
	};
});

app.directive('newtripForm', function(){
	return {
		restrict: 'E',
		templateUrl:'html/newtripform.html'
	};
});