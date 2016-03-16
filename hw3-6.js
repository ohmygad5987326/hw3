var personobj = {
  firstname:"Chao",
  fullname:"",
  age: 37,
	married: true,
	hasOwnHair: null,
  children: [{
    firstname: "Hank"
  },{
    firstname: "Alan"
  }]
};

//var personobj =()=> {}!?
var personjson =JSON.stringify(personobj)//相反JSON.parse(personobj)
console.log(personobj);
console.log(personjson);
