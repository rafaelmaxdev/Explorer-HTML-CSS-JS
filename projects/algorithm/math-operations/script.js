let number1 = prompt("Escolha um número para calcular nas operações.");
let number2 = prompt("Escolha mais um número para calcular nas operações.");

number1 = Number(number1);
number2 = Number(number2);

const sum = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const divisionRest = number1 % number2;

alert(`
Soma: ${sum}
Subtração: ${subtraction}
Multiplicação: ${multiplication}
Divisão: ${division}
Resto da divisão: ${divisionRest}
`);
