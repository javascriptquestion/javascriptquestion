javascriptquestionapp.controller("javascriptquestionCtrl", function($scope) {
	$scope.javascriptquestions = [{
		"question" : "What is javascript?",
		"answer" : "Javascript is an interpreted programming or script language used for webpage behaviour.",
		"category" : "beginner"
	}, {
		"question" : "Who is the father of javascript?",
		"answer" : "Brendan Eich.",
		"category" : "beginner"
	}, {
		"question" : "First appeared of javascript?",
		"answer" : "May 23, 1995.",
		"category" : "beginner"
	}, {
		"question" : "Filename extension of javascript?",
		"answer" : "Filename extension is filename.js.",
		"category" : "beginner"
	}, {
		"question" : "What is the correct media type for JavaScript source code?",
		"answer" : "application/javascript.",
		"category" : "intermediate"
	}, {
		"question" : "Type of format of javascript?",
		"answer" : "Scripting language.",
		"category" : "beginner"
	}, {
		"question" : "Difference between javascript and jquery?",
		"answer" : "jQuery is a wrapper(library) of JavaScript. Javascript is a interpreted programming or script language whereas jQuery is a framework or library to help make writing in javascript much easier.",
		"category" : "intermediate"
	}, {
		"question" : "Difference between undefined and null in javascript?",
		"answer" : "jQuery is a wrapper(library) of JavaScript. Javascript is a interpreted programming or script language whereas jQuery is a framework or library to help make writing in javascript much easier.",
		"category" : "intermediate"
	}, {
		"question" : "Example of undefined in javascript?",
		"answer" : "var _myVar; <br />  console.log(_myVar); <small><small>//shows undefined</small></small> <br />  console.log(typeof _myVar); <small><small>//shows undefined</small></small>.",
		"category" : "intermediate"
	}, {
		"question" : "Example of null in javascript?",
		"answer" : "var _myVar = null; <br />  console.log(_myVar); <small><small>//shows null</small></small> <br />  console.log(typeof _myVar); <small><small>//shows object</small></small>.",
		"category" : "intermediate"
	}, {
		"question" : "Difference between break and return in javascript?",
		"answer" : "break exits a <b>loop</b>, <br /> return exits a <b>function</b>.",
		"category" : "expert"
	}, {
		"question" : "Internal vs external script - what's the difference?",
		"answer" : "However, the browser will cache the javascript file, so if you have multiple pages that share the same script, Case 2 will be more efficient, because for subsequent pages, the browser already has the cached script and doesn't need to download it again. <br /><br /> Also, most browsers will allow opening two connections to the same server, so it may download the page and the script simultaneously on the first request, although it depends on size of the page and the script, the server, the client and the internet properties (latency and speed) which solution is faster.  ",
		"category" : "expert"
	}];

	$scope.categoryfilt = {
		beginner : false,
		intermediate : false,
		expert : false
	};

	$scope.getFilterData = function() {
		var filtered = [];
		angular.forEach($scope.javascriptquestions, function(item) {
			if ($scope.categoryfilt.beginner == false && $scope.categoryfilt.intermediate == false && $scope.categoryfilt.expert == false) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == true && $scope.categoryfilt.intermediate == false && $scope.categoryfilt.expert == false && item.category == 'beginner') {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == true && $scope.categoryfilt.intermediate == true && $scope.categoryfilt.expert == false && (item.category == 'beginner' || item.category == 'intermediate')) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == true && $scope.categoryfilt.intermediate == true && $scope.categoryfilt.expert == true && (item.category == 'beginner' || item.category == 'intermediate' || item.category == 'expert')) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == true && $scope.categoryfilt.intermediate == false && $scope.categoryfilt.expert == true && (item.category == 'beginner' || item.category == 'expert')) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == false && $scope.categoryfilt.intermediate == true && $scope.categoryfilt.expert == false && (item.category == 'intermediate')) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == false && $scope.categoryfilt.intermediate == true && $scope.categoryfilt.expert == true && (item.category == 'intermediate' || item.category == 'expert')) {
				filtered.push(item);
			} else if ($scope.categoryfilt.beginner == false && $scope.categoryfilt.intermediate == false && $scope.categoryfilt.expert == true && (item.category == 'expert')) {
				filtered.push(item);
			}

		});
		
		$scope.javascriptquestions = filtered;
		

	};

});
