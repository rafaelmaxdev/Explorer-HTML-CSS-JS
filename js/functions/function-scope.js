/*
let subject = "create video"

function createThink(subject) {
  subject = "study"
  return subject
}


console.log(createThink(subject)) //study
console.log(subject) // create video
*/

let subject

function createThink() {
  subject = "study"
}

console.log(subject) // undefined
createThink()
console.log(subject) // study