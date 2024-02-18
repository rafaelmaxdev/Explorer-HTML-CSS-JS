// VAR

var validate = true;

function showVar() {
  return console.log(validate); // true
}

showVar();

// LET

// let validate = true

function showLet() {
  // return console.log(validate) // erro, porque a variável está fora do escopo da função
}

// showLet()

// CONST

const age = 14;
// age = 15 // erro, porque não pode mudar o valor da const
console.log(age);
