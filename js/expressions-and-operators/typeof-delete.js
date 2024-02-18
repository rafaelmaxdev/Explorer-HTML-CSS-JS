/*
    Operadores unários
    typeof
    delete
*/
const person = {
  name: "Rafael",
  age: "25",
};
delete person.age;

console.log(person); // { name: 'Rafael' }
