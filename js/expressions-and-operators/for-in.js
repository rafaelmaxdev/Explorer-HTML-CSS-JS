let person = {
  name: "John",
  age: 30,
  weight: 88.6,
};

for (let property in person) {
  console.log(property); // name age weight
  console.log(person[property]); // name John age 30 weight 88.6
}
