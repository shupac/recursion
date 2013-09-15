// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	//var strArr = [obj];
    var strArr=[];
    if(obj instanceof Array) {
	  strArr.unshift("[");
	  for(var i = 0; i < obj.length; i++) {
		  strArr.push(stringifyJSON(obj[i]));
          if(i!== obj.length-1) strArr.push(",");
	  }
	  strArr.push("]");
	}
	else if(obj instanceof String || typeof obj === 'string') {
	  strArr.unshift("\"");
      strArr.push(obj);
	  strArr.push("\"");        
	}
    else if( Object.prototype.toString.call(obj) === '[object Object]' ) {
      strArr.unshift("{");
      for(var p in obj) {
        if(obj[p]!==undefined) {
            strArr.push(stringifyJSON(p));
            strArr.push(":");
        }
        else if(strArr[strArr.length-1]===",") strArr.pop();
        if(typeof obj[p] === 'number') {
            strArr.push("\""+obj[p]+"\"");
        }
        else strArr.push(stringifyJSON(obj[p]));
        strArr.push(",");
      }
      if(strArr[strArr.length-1]===",") strArr.pop();
      strArr.push("}");
    }
    else if(obj === null) strArr.push("null");
    else strArr.push(obj);

	return strArr.join("");
};