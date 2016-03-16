var fs = require('fs');

var greet = fs.readFileSync(__dirname +'/greet.txt', 'utf8');

r greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',function(err,data){
  	console.log(data);//(err, data)error&讀到的data
}
console.log('Done!');
