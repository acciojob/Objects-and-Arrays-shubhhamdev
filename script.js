const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team = players;
const team1 = players.slice();
const cap1 = { ...person };

console.log(team);  // Output: ["John", "Bob", "Alice", "Poppy"]
console.log(team1); // Output: ["John", "Bob", "Alice", "Poppy"]
console.log(cap1);  // Output: { name: "John Doe", age: 80 }
