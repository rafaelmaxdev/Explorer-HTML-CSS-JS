let option;

list = [];

while (option != 3) {
  option = Number(
    prompt(`
Olá usuário! Digite o número da opção desejada.

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa
`)
  );

  switch (option) {
    case 1:
      let item = prompt("Qual item você deseja cadastrar na lista?");
      list.push(item);
    case 2:
      if (list.length == 0) {
        ("Não existem itens cadastrados.");
      } else {
        alert(list);
      }
    case 3:
      option === null;
    default:
      alert("Opção inválida. Tente novamente.");
  }
}
