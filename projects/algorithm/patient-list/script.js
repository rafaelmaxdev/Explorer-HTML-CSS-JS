const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 20,
    weight: 90,
    height: 190,
  },
];

let patientsNames = [];
let patientsAges = [];
let patientsWeights = [];
let patientsHeights = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
  patientsAges.push(patient.age);
  patientsWeights.push(patient.weight);
  patientsHeights.push(patient.height);
}

for (let index = 0; index < patientsNames.length; index++) {
  alert(
    `${patientsNames[index]} tem ${patientsAges[index]} anos, pesa ${patientsWeights[index]}kg e mede ${patientsHeights[index]}cm`
  );
}
