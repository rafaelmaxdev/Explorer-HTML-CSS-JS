// const e let são locais e só funcionam no escopo onde foi criada
let y = 1;

{
  let y = 0;
  console.log("> existe y? ", y); // 0
}

// console.log("> existe y depois do bloco? ", y) //erro / outro escopo
console.log("> existe y depois do bloco? ", y); // 1
