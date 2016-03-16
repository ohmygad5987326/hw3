'user strict'
class Person {
  constructor(name) {
    this.name1 = name;
  }
  printGreeting(){
    console.log(`!Hi i am ${this.name}!`);
  }
}
//var  person1
class Employee extends Person{
  constructor(name,job){
    super(name)//super()是要叫出Person的name
    this.job1 = job;
  }
  printGreeting(){
  super.printGreeting();
  console.log(`!Hi i am ${this.name} and i am a ${this. job}!`);
  }
}
var person1 = new Employee('alan','student'){
    person1.printGreeting();
}
var person2 = new Person('jack'){
  person2.printGreeting();
}
