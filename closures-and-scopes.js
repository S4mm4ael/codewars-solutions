//We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

function createFunctions(n) {
  var callbacks = [];

	function writeIndex(index){
		return function(){
			return index;
		};
	}
	
	for(let i = 0; i < n; i++){
		callbacks.push(writeIndex(i));
	}

  return callbacks;
}
