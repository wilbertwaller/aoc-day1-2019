const fs = require('fs');

fs.readFile('./mass-modules.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file');
  }

  const modules = data.trim().split('\n').map(module => parseInt(module));
  let totalFuelRequired = 0;

  // Fuel required - Part 1
  modules.forEach(module => totalFuelRequired += calculateFuelRequired(module));
  console.log(`Fuel required - Part 1: ${totalFuelRequired}`);

  // Fuel required - Part 2
  totalFuelRequired = 0;
  modules.forEach(module => {
    let requiredFuel = calculateFuelRequired(module);
    while (requiredFuel > 0) {
      totalFuelRequired += requiredFuel;
      requiredFuel = calculateFuelRequired(requiredFuel);
    }
  });
  console.log(`Fuel required - Part 2: ${totalFuelRequired}`);
});

const calculateFuelRequired = (mass) => {
  return (Math.floor(mass/3) - 2);
};