const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a shallow copy of the players array
const team1 = [...players];

// Create a shallow copy of the person object
const cap1 = Object.assign({}, person);

// Testing to ensure the copies are independent
team.push("New Player");
team1.push("Another Player");
cap1.name = "New Name";

console.log("Original Players:", players);
console.log("Team:", team);
console.log("Team1:", team1);
console.log("Original Person:", person);
console.log("Cap1:", cap1);
