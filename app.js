const parents = [
  { name: "John Smith", gender: "father" },
  { name: "Jane Doe", gender: "mother" },
  { name: "Michael Johnson", gender: "father" },
  { name: "Emily Williams", gender: "mother" },
  { name: "Robert Brown", gender: "father" },
  { name: "Jessica Davis", gender: "mother" },
  { name: "William Miller", gender: "father" },
  { name: "Olivia Wilson", gender: "mother" },
  { name: "David Anderson", gender: "father" },
  { name: "Sophia Martinez", gender: "mother" },
  { name: "James Taylor", gender: "father" },
  { name: "Isabella Thomas", gender: "mother" },
  { name: "Daniel Hernandez", gender: "father" },
  { name: "Ava Lopez", gender: "mother" },
  { name: "Matthew Gonzalez", gender: "father" },
  { name: "Mia Perez", gender: "mother" },
  { name: "Joseph Robinson", gender: "father" },
  { name: "Abigail Hill", gender: "mother" },
  { name: "Richard Adams", gender: "father" },
  { name: "Elizabeth Lee", gender: "mother" },
];

let male = [];
for (let i = 0; i < parents.length; i++) {
  if (parents[i].gender === "father") {
    male = [...male, parents[i]];
  }
}
let female = [];
for (let i = 0; i < parents.length; i++) {
  if (parents[i].gender === "mother") {
    female = [...female, parents[i]];
  }
}
console.log(female);
