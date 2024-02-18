let guessedNumber = prompt(
  "Adivinhe o número que eu estou pensando? Está entre 0 e 10."
);
let randomNumber = Math.round(Math.random() * 10);

let attempts = 1;

while (Number(guessedNumber) !== randomNumber) {
  guessedNumber = prompt("Erro, tente novamente");
  attempts++;
}

alert(`Você acertou em ${attempts} tentativas!`);
