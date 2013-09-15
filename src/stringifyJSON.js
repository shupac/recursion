// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var strArr = [obj];
	if(obj instanceof Array) {
	  strArr.unshift("[");
	  strArr.push("]");
	}
	else if(obj instanceof String || typeof obj === 'string') {
	  strArr.unshift("\"");
	  strArr.push("\"");        
	}

	return strArr.join("");
};

