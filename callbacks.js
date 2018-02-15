function findWaldo(arr, compare) {
  arr.forEach(function(element) {
  	compare(element, "Waldo", arr.indexOf(element));
  });
}

function check(name, wanted, i) {
	if(name === wanted) {
  	console.log("Found", name, "at index", i, "!");
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], check);