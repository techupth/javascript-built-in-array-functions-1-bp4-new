const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return console.log(
    students.reduce(function (accumlator, students) {
      return accumlator + students.score;
    },0) / students.length
  );
}

getAverageStudentScore(students); // Output: 87.5
