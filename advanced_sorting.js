var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareStudents(a, b) {
  if(a.name !== b.name) return a.name.localeCompare(b.name);
  else {
  	return (a.age - b.age);
  }
}

students.sort(compareStudents);
console.log(students);