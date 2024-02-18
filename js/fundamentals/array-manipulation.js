let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs"); // [ 'html', 'css', 'js', 'nodejs' ]
// adicionar no começo
techs.unshift("sql"); // [ 'sql', 'html', 'css', 'js', 'nodejs' ]
// remover do fim
// techs.pop() // [ 'sql', 'html', 'css', 'js' ]
// remover do começo
// techs.shift() // [ 'html', 'css', 'js' ]
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3)) // [ 'css', 'js' ] // primeiro número qual posição começa a seleção e o segundo onde termina
// remover um ou mais itens em qualquer posição do array
// techs.splice(1, 1) // [ 'css' ] // primeiro parâmetro qual posição do array vai ser removido e o segundo é quantos em seguida
// encontrar a posição de um elemento do array
let index = techs.indexOf("css");
techs.splice(index, 1);

console.log(techs); // [ 'sql', 'html', 'js', 'nodejs' ]
