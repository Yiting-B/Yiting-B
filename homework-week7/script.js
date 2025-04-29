const buttonClicked = document.querySelector(".randomButton");
const studentsList = document.getElementById("studentsList");
const teachersList = document.getElementById("teachersList");
console.log(buttonClicked);
console.log(studentsList);
console.log(teachersList);
const students = [
  "Mehrnoosh",
  "Maria",
  "Oumaima",
  "Yiting",
  "Sunitha",
  "Sukhwinder",
  "Prachi",
  "Busra",
  "Paloma",
  "Annamani",
  "Sravani",
  "Natalia",
  "Fatima",
  "Tejaswini",
  "Fulya",
  "Gloryfel",
];
const teachers = [
  "Henderson",
  "Tifana",
  "Iga",
  "Engiber",
  "Kumaran",
  "Lukáš",
  "Tim",
];

buttonClicked.addEventListener("click", () => {
  students.sort(() => Math.random() - 0.5);
  teachers.sort(() => Math.random() - 0.5);
  studentsList.innerHTML= students.map(name => `<li>${name}</li>`).join("");
  teachersList.innerHTML=teachers.map(name => `<li>${name}</li>`).join("");
});

console.log(students);
