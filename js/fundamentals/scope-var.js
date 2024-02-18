// var é global e, também global
var x; // hoisting
console.log("> existe x antes do bloco? ", x);

{
  x = 0; // var x = 0
}

console.log("> existe x depois do bloco? ", x);
