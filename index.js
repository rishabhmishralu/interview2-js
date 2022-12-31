// function student(name,rollno,city,age){
// this.name=name;
// this.rollno=rollno;
// this.city=city;
// this.age=age;

// }
//  const students= new student("rishabh",20,"lucknow",22)
//  console.log(students)


// callback
// function hi(){
//     console.log("hello");
// }
// function name(a){
//     console.log("rishbah");
//     hi()
// }
// name()


// prototype

// function student(name){
//     this.name=name;

// }

// student.prototype.city="lmp"
// students=new student("rahul")
// console.log(students.city);


function student(name,rollNo){
    this.name=name;
    this.rollNo=rollNo;
}
let student1= new student("rishabh",08)
let student2= new student("aryan",02)
console.log(student1);
console.log(student2);
student1.sports='cricket'

console.log(Object.getOwnPropertyNames(student1))