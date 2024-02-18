let student = prompt("Qual o seu nome?");

let grade1 = prompt("Qual foi sua nota no primeiro bimestre?");
let grade2 = prompt("Qual foi sua nota no segundo bimestre?");

const average = (Number(grade1) + Number(grade2)) / 2;

let result = average.toFixed(2);

const isPassed = result >= 7 && result <= 10;
const isNotPassed = result < 7;

if (isPassed) {
  prompt(`Parabéns ${student}! Você passou com média ${result}`);
} else if (isNotPassed) {
  prompt(
    `Dê o seu melhor na próxima, ${student}! Sua média infelizmente foi ${result}`
  );
} else {
  alert("Valor inválido...");
}
