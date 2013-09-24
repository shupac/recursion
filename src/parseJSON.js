// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  if(json==="null")  return null;
  if(json==="true")  return true;
  if(json==="false") return false;
  if(!isArray(json) && !isObject(json)) {
    if(isString(json)){
      return json.substring(1,json.length-1) ;
    }
    else{
      return +json;     // expect a number - checking for faulty input should also be here
    }
  }
  else if(isArray(json)){
    if(json === '[]') return [];
    else {
      json = json.substring(1,json.length-1);
      var arr = json.split(",");
      var retArr = [];
      for(var i = 0; i < arr.length; i++) {
        retArr.push(parseJSON(arr[i]));
      }
      return retArr;
    }
  }
  else{       // expect object


  }
};






var isString = function(json){
  return (json[0]==='"');
}

var isArray = function(json){
    return (json[0]==='[');
}
var isObject = function(json){
  return false;//write this
}

