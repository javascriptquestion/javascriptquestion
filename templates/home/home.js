javascriptquestionapp.controller("home_ctrl", function($scope) {

	$scope.javascripttopics = [{
		"title" : "Variable",
		"url" : "variable",
		"description" : "JavaScript variables are containers for storing data values. <h5>Data types</h5><p> Primitive data types : Numeric, String, Boolean</p><p> Complex data types : Array, Object</p>"
		/* https://en.wikibooks.org/wiki/JavaScript/Variables_and_types*/
	}, {
		"title" : "Loop",
		"url" : "loop",
		"description" : "If you want to execute same code multiple times, but each time different value.<h5> Types of loop</h5>for, while, do while, for in "
		// "description" : "If you want to execute same code multiple times, but each time different value.  <h5> Types of loop</h5> <ul><li>for - allows code to be executed repeatedly </li><li>while - allows code to be executed repeatedly based on a given boolean condition</li><li>do while - </li><li>for in - </li></ul> "
		// https://en.wikipedia.org/wiki/While_loop
	}, {
		"title" : "Function",
		"url" : "function",
		"description" : "A function is a block of reusable code which we can called anywhere in the project. <br/> <br/> Function allow a programmer to optimize repetitive code."
	}, {
		"title" : "Array",
		"url" : "topics/array",
		"description" : "An Array is a variable, which can store multiple type value at a time.<br /><br /> <h5>Methods Of Array</h5>toString, join, pop, push, shift, unshift, splice, concat, slice, valueOf"
	}, {
		"title" : "String",
		"url" : "string",
		"description" : "String is group/sequence of character. A string can be any text inside double or single quotes: <br /><br /> <h5> Methods Of String</h5> concat, charAt, match, slice, split, toString, toUpperCase, toLowerCase, trim, valueOf"
	}, {
		"title" : "Math",
		"url" : "topics/math",
		"description" : "The Math object is used for perform mathematical operation.<br /><br /> <h5> Methods Of Math </h5> random, min, max, round, ceil, floor, abs"
	} /*, {
	 "title" : "Prototype",
	 "url" : "",
	 "description" : "Description"
	 }, {
	 "title" : "Object",
	 "url" : "",
	 "description" : "Description"
	 }, {
	 "title" : "Closures",
	 "url" : "",
	 "description" : "Description"
	 } */];

}); 