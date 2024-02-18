// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleResetClick();
  }
});
// Função callback
function handleTryClick(event) {
  // event é todas as informações do click
  // funções
  event.preventDefault(); // Não faça o padrão (enviar o formulário, já que o botão tá dentro de um form)

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${attempts} tentativas!`;
  }

  inputNumber.value = "";
  attempts++;
}

// Callback
function handleResetClick() {
  toggleScreen();
  attempts = 1;
}

function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}
