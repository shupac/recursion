// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var array=[];
	findNodes(document.childNodes, className, array);
	return array;
};

var findNodes = function(node, className, array) {
	for(var p in node) {
		var name = node[p].className;
		if(typeof name === 'string') {
			if(name.indexOf("green") !== -1) {
				//console.log(node[p]);
				array.push(node[p]);				
			}
		}
	}
	for(var i = 0; i < node.length; i++) {		
		findNodes(node[i].childNodes, className, array);
	}
};

