function map(arr, callback) {
  var new_arr = [];
  arr.forEach(function(element) {
  	new_arr.push(callback(element));
  });
  return new_arr;
}

var words = ["ground", "control", "to", "major", "tom"];

var ex1 = map(words, function(word) {
  return word.length;
});

var ex2 = map(words, function(word) {
  return word.toUpperCase();
});

var ex3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(ex1);
console.log(ex2);
console.log(ex3);

