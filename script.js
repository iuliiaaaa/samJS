//Имеется класс «Car», позволяющий создавать объекты со следующими характеристиками: марка машины, год выпуска и цена.
// const object = new Car("BMW", 1999, 800000);

class Exam {
  constructor(surname, name, BD, JS, PHP) {
    this.surname = surname;
    this.name = name;
    this.BD = BD;
    this.JS = JS;
    this.PHP = PHP;
  }
  toString() {
    return `${this.surname} ${this.name} оценка по БД - ${this.BD}, по JS - ${this.JS}, PHP - ${this.PHP}.`;
  }
  get GPA() {
    const GPACount = (this.BD + this.JS + this.PHP) / 3;
    return `${GPACount}`;
  }
  get smart() {
    if (this.BD && this.JS && this.PHP >= 4) {
      return `${this.surname} ${this.name} - хорошист`;
    }
  }
  get stupid() {
    if (this.BD || this.JS || this.PHP == 2) {
      return `${this.surname} ${this.name} - должник`;
    }
  }
}

let students = [
  new Exam("Петров", "Иван", 5, 4, 2),
  new Exam("Иванов", "Николай", 4, 5, 4),
  new Exam("Сверидова", "Анна", 5, 5, 5),
  new Exam("Семёнова", "Алиса", 3, 4, 2),
];

students.sort((a, b) => b.GPA - a.GPA);
students.forEach(item =>{
    console.log(`${item.GPA}`)
} )
console.log("_".repeat(20));

console.log("хорошисты:");
let smartStud = students.filter((item) => item.smart);
smartStud.forEach((item) => console.log(`${item.toString()}`));
console.log("_".repeat(20));

let stupidStud = students.filter((item) => item.stupid);
let countStupid = stupidStud.length;
let count = students.length;

//абсолютная
let abs = ((count - countStupid) * 100) / count;
console.log(`абс. успеваемость: ${abs}%`);
console.log("_".repeat(20));

//качественная
let smartAll = smartStud.length;
let kach = ((count - smartAll) * 100) / count;
console.log(`кач. успеваемость: ${kach}%`);
console.log("_".repeat(20));

//средний бал
let sred = 0;
students.forEach((item) => {
sred += item.GPA;
});
let res = sred / count;
console.log(`ср.балл всех сдающих экзамен: ${res}`);


