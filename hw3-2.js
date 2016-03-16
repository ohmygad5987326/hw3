// Your Javascript Code Goes Here
var address = {
  street: 'Main',
  nunber:  100,
  apartment:{
    Floor: 3,
    Number: 301
   }

};
var  person = {
  firstname: 'Tzu-Jung',
  lastname: 'Chao',
  greet: functuon(){
    	console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
};
person.greet();
console.log( person['firstname']);
