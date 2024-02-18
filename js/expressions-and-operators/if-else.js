let temperature = 38;
let highTemperature = temperature >= 38;
let mediumTemperature = temperature < 37.5 && temperature >= 37.5;

if (highTemperature) {
  console.log("Febre alta");
} else if (mediumTemperature) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}
// Febre alta
