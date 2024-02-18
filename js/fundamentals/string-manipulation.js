// string pra número
console.log(Number("1") + 3); // 4

// contar caracteres e tamanho de array
console.log("hello".length); // 5
console.log(String(1234).length); // 4
console.log(["html", "css", "javascript"].length); // 3

// limitar casas decimais e trocar . por ,
console.log((13.694226).toFixed(2).replace(".", ",")); // 13,69

// maiúscula para minúscula e vice versa
console.log("hello".toUpperCase()); // HELLO
console.log("COMEBACK".toLowerCase()); // comeback

// tirar espaços de uma frase e trocar por _
console.log("I am coming".split(" ").join("_")); // I_am_coming

// verificar se tem a palavra no texto
console.log("Hello world".includes("world")); // true

// criar array com construtor
console.log((myArray = new Array(10))); // [ <10 empty items> ]

// separar palavra em que cada posição do array seja uma letra
const world = "earth";
console.log(Array.from(world)); // [ 'e', 'a', 'r', 't', 'h' ]
