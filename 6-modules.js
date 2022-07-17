//Modules
//Common JS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const name= require('./2-names');
const sayHi= require('./3-utils');
const data= require('./4-alternative-way');
console.log(data);
require('./5-mind-grenade');// if there is function inside module that will run even if we dont assign--
//--it to a variable
sayHi('Rishabh');
sayHi(name.john);
sayHi(name.peter);