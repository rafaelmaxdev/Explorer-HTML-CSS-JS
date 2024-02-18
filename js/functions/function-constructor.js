/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const Rafael = new Person("Rafael")
const João = new Person("João")
console.log(Rafael.walk())
console.log(João.walk())