const today = new Date();

console.log(today.toLocaleDateString('es-ES')); 

console.log(today.toLocaleTimeString('es-ES')); // timezone in spain

let nyTime = today.toLocaleString('en-US', { timeZone: 'America/New_York'});

console.log('New York Time:', nyTime);

