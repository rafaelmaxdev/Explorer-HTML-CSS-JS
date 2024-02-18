const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.9,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 1.7,
  },
  {
    name: "Carlos",
    age: 20,
    weight: 90,
    height: 1.9,
  },
];

let patientsWeights = [];
let patientsHeights = [];
let patientsNames = [];

/* for(let patient of patients) {
patientsNames.push(patient.name)
patientsWeights.push(patient.weight)
patientsHeights.push(patient.height)
}

console.log(typeof patientsWeights[0])

for (let index = 0; index < patientsNames.length; index++) {
  let imc = Number(patientsWeights[index]) / Number((patientsHeights[index]**2))
  console.log(`${patientsNames[index]} tem um IMC de ${imc.toFixed(2)}`)
}
*/

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function printPatientIMC(patient) {
  return `
  Paciente ${patient.name} possui o IMC de ${IMC(
    patient.weight,
    patient.height
  )}
`;
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient);
  alert(IMCmessage);
}
