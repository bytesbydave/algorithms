// var a = 1

// function b() {
//   console.log('method', a())
//   a = 10;
//   console.log('variable', a)
//   return
//   function a() {
//     console.log(a)
//   }
// }

// b()

// console.log(b())
// console.log(a)

// -----------------------------

// var x = 'x';
// function findName() {
//   console.log(x);
//   console.log(b);
//   var b = 'b';
//   return printName();
// }

// function printName() {
//   console.log(x);
//   var c = 'c';
//   return 'David'
// }

// function sayName() {
//   var a = 'a'
//   return findName();
// }

// console.log(sayName());

// -----------------------------

// function sayName() {
//   var a = 'a';
//   return function findName() {
//     var b = 'b';
//     return function printName() {
//       var c = 'c';
//       console.log(c, b, a);
//       return 'Dave';
//     };
//   };
// }

// sayName();
// sayName()();
// sayName()()();

// -----------------------------

// console.log(heyhey)
// console.log(heyhey())

// var heyhey = function doodle() {
//   return 'hey'
// }

// console.log(heyhey());
// console.log(doodle());

// -----------------------------

// function loop() {
//   for (var i = 0; i<5; i++) {
//     console.log(i)
//   }
//   console.log('final', i)
// }

// loop()

// function letloop() {
//   for (let i = 0; i<5; i++) {
//     console.log(i)
//   }
//   console.log('final', i)
// }

// letloop()

// -----------------------------

// var script1 = (function() {
//   function a() {
//     console.log(5);
//   }
//   return {
//     a: a
//   };
// })();

// script1.a();

// -----------------------------

// // Immediately Invoked Function Expression

// var script1 = (function() {
//   $('h1').click(function() {
//     $('h1').hide()
//   })
//   return {
//   };
// })();

// // SAME AS

// var script1 = (function(OMG) {
//   OMG('h1').click(function() {
//     OMG('h1').hide()
//   })
//   return {
//   };
// })(jQuery);

// Doesn't go up the global namespace to find the '$' so you get a performance improvement

// -----------------------------

// const obj = {
//   name: 'Bill',
//   sing: function() {
//     return 'lalala ' + this.name;
//   }
// };

// console.log(obj.sing());

// -----------------------------

// const obj = {
//   name: 'Sammy',
//   sing() {
//     return 'lala ' + this.name
//   },
//   singAgain() {
//     return this.sing() + '!'
//   }
// }

// console.log(obj.sing())
// console.log(obj.singAgain())

// -----------------------------

// function importantPerson() {
//   console.log(this.name);
// }

// const name = 'Sarah';

// const obj1 = {
//   name: 'Frank',
//   importantPerson: importantPerson
// };

// const obj2 = {
//   name: 'Jake',
//   importantPerson: importantPerson
// };

// console.log(importantPerson()); // the name is the variable name (Sarah), but wont work here because of ES6
// console.log(obj1.importantPerson()) // Frank

// -----------------------------

// const a = function() {
//   console.log('a', this); //window
//   const b = function() {
//     console.log('b', this); //window
//     const c = {
//       hi: function() {
//         console.log('c', this); // c object { hi: function }
//       }
//     };
//     c.hi()
//   };
//   b()
// };

// console.log(a());

// -----------------------------

// const obj = {
//   name: 'Paul',
//   sing() {
//     console.log(this); // obj
//     var anotherFunc = function() {
//       console.log(this); // window THIS IS A COMMON ERROR
//     };
//     anotherFunc();
//   }
// };

// console.log(obj.sing());

// -----------------------------

// const obj = {
//   name: 'Paul',
//   sing() {
//     console.log(this); // obj
//     var anotherFunc = () => { // arrow functions are lexically bound
//       console.log(this); // obj  ***
//     };
//     anotherFunc();
//   }
// };

// console.log(obj.sing());

// -----------------------------

// const obj = {
//   name: 'Paul',
//   sing() {
//     console.log(this); // obj
//     var anotherFunc = function() {
//       console.log(this); // obj  ***
//     };
//     return anotherFunc.bind(this); // before es6 and arrow functions:
//   }
// };

// console.log(obj.sing()); // returns a function
// console.log(obj.sing()()); //calls the other function to return obj

// -----------------------------

// const obj = {
//   name: 'Paul',
//   sing() {
//     console.log(this); // obj
//     var self = this;
//     var anotherFunc = function() {
//       console.log(self); // obj
//     };
//     anotherFunc();
//   }
// };

// console.log(obj.sing())

// -----------------------------

// function a() {
//   console.log('hi')
// }

// a.call();

// const wizard = {
//   name: 'Merlin',
//   health: 50,
//   heal(num1, num2) {
//     return this.health += num1 + num2
//   }
// }

// const archer = {
//   name: 'Robin',
//   health: 30
// }

// console.log(wizard.heal.call(archer, 50, 30)) // substitues archer object for wizard object
// console.log(wizard.heal.apply(archer, [40, 20]))
// console.log(archer)

// -----------------------------

// const array = [1,2,3]

// function getMax(arr) {
//   return Math.max.apply(null, arr)
// }

// getMax(array)

// -----------------------------

// // function curring
// function multiply(a,b) {
//   return a*b
// }

// let multiplyByTwo = multiply.bind(this, 2) //assigns the first parameter to 2

// console.log(multiplyByTwo(5)) // gives you 10

// -----------------------------

// var b = {
//   name: 'jay',
//   say() {console.log(this)}
// }

// b.say() // get the b object

// var c = {
//   name: 'jay',
//   say() {return function() {console.log(this)}}
// }

// c.say() // returns a function
// c.say()() //returns the window object

// var d = {
//   name: 'jay',
//   say() {return () => console.log(this)}
// }

// d.say() // returns a function
// d.say()() // returns the d object

// -----------------------------

// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// // const giveMeTheCharacterNOW = character.getCharacter // previously
// const giveMeTheCharacterNOW = character.getCharacter.bind(character); // solution

// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't

// -----------------------------

// // Primitive Types are 'Pass by Value'
// var a = 5;
// var b = a;

// b++

// console.log(a)
// console.log(b)

// // Objects are 'Pass by Reference'

// let obj1 = { name: 'Max', password: '123'}
// let obj2 = obj1;

// obj2.password = '456'

// console.log(obj1)
// console.log(obj2)

// let obj1 = { a: 'a', b: 'b', c: 'c' };
// let obj2 = Object.assign({}, obj1);
// let obj3 = { ...obj };

// obj1.c = 5;
// console.log(obj2); //obj2 is unchanged
// console.log(obj3); //obj3 is unchanged

// var c = [1,2,3,4]
// var d = c
// var e = [4,5,6,7,8]
// var f = [].concat(e)

// d.push(4553)
// f.push(42423223)

// console.log(c) // c has changed as well
// console.log(e) // e in unchanged

// -----------------------------

// let obj1 = {
//   a: 'a',
//   b: 'b',
//   c: {
//     deep: 'try to copy me'
//   }
// };

// let obj2 = Object.assign({}, obj1);
// let obj3 = { ...obj1 };
// let superClone = JSON.parse(JSON.stringify(obj1))

// obj1.c.deep = 'haha'

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(superClone)

// -----------------------------

// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// console.log(eq)

// var eq2 = JSON.stringify(user1) === JSON.stringify(user2)
// console.log(eq2)

// -----------------------------

// const number = 100
// const string = "Jay"

// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//     number = number * 10;
//     string = "Pete";
//     obj1 = obj2;
//     obj2.value = "c";
// }

// change(number, string, obj1, obj2);

// //Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(obj1.value);
// console.log(obj2.value);
// console.log(obj3.value);

// -----------------------------

// console.log(1 == '1');
// console.log(0 == false);
// console.log(1 == true);
// console.log(NaN === NaN);
// console.log(Object.is(-0, +0));
// console.log(+0 === -0);

// console.log(false == '');
// console.log(false == []);
// console.log(false == {});
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});
// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == null);

// -----------------------------

// const obj = {
//   two: function() {
//     return 2;
//   }
// }

// obj.two()

// SAME AS

// const obj = {
//   two() {
//     return 2
//   }
// }

// obj.two()

// function three() {
//   return 3
// }

// three.call()

// const four = new Function('num', 'return num')

// four()

// -----------------------------

// var stuff = function() {};

// function a(fn) {
//   fn();
// }

// a(function() {
//   console.log('hi');
// });

// // -----------------------------

// function b() {
//   return function c() {
//     console.log('bye');
//   };
// }

// b()();

// -----------------------------

// // INCORRECT
// for (let i = 0; i < 5; i++) {
//   function a() {} // Bad to initialize the function 5 times. Function should be initialized outside the loop
//   a();
// }

// // CORRECT
// function a() {} // Function gets initialized outside

// for (let i = 0; i < 5; i++) {
//   a();
// }

// -----------------------------

// HIGHER ORDER FUNCTIONS:

// function letAdamLogin() {
//   let array = [];
//   for (let i = 0; i < 100000000; i++) {
//     array.push(i);
//   }
//   return 'Access Granted to Adam';
// }

// function letEvaLogin() {
//   let array = [];
//   for (let i = 0; i < 100000000; i++) {
//     array.push(i);
//   }
//   return 'Access Granted to Eva';
// }

// letAdamLogin();
// letEvaLogin();

// Can allow one function to DRY this code up

// function letUserLogin(user) {
//   let array = [];
//   for (let i = 0; i < 10000; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(user);
// }

// const giveAccessTo = function(name) {
//   return 'Access Granted to ' + name;
// };

// console.log(letUserLogin('Adam'));

// If there are many different types of users you may need to adjust other properties

// const giveAccessTo = function(name) {
//   return 'Access Granted to ' + name;
// };

// function authenticate(verify) {
//   let array = [];
//   for (let i = 0; i < verify; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(person.name)
// }

// function sing(person) {
//   return 'lalala' + person.name
// }

// function letPerson(person, fn) {
//   if (person.level === 'admin') {
//     return fn(500000)
//   } else if(person.level === 'user') {
//     return fn(10000)
//   }
// }

// letPerson({ level: 'user', name: 'Charlie'}, authenticate )
// // tells what data to user + function
// letPerson({ level: 'user', name: 'Charlie'}, sing )

// -----------------------------

// // Closures

// function a() {
//   let grandpa = 'grandpa';
//   return function b() {
//     let father = 'father';
//     return function c() {
//       let son = 'son';
//       return `${grandpa} > ${father} > ${son}`;
//     };
//   };
// }

// console.log(a()()())

// -----------------------------

// function callMeMaybe() {
//   setTimeout(function() {
//     console.log(callMe); // still receives the variable because it is enclosed
//   }, 400);
//   const callMe = 'Hi Bud';
// }

// callMeMaybe();

// -----------------------------

// // Memory Efficient
// function heavyDuty(index) {
//   const bigArr = new Array(700).fill('hi');
//   console.log('created!')
//   return bigArr[index];
// }

// heavyDuty(3);
// heavyDuty(3);
// heavyDuty(3);

// // We create the big array three times which is bad

// // Use this instead
// function heavyDuty2() {
//   const bigArr = new Array(700).fill('hi');
//   console.log('created!');
//   return function(index) {
//     // Closure
//     console.log('created again');
//     return bigArr[index];
//   };
// }

// const getHeavyDuty = heavyDuty2();
// getHeavyDuty(588);
// getHeavyDuty(588);
// getHeavyDuty(588);

// -----------------------------

// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;
//   const passTime = () => {
//     timeWithoutDestruction++;
//   };
//   const totalPieceTime = () => {
//     timeWithoutDestruction;
//   };
//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return 'boom';
//   };
//   setInterval(passTime, 1000);
//   return {
//     // launch: launch, //Encapsulation: hidign of information uncessary to the outside world
//     totalPeaceTime: totalPieceTime
//   };
// };

// const ohno = makeNuclearButton();

// console.log(ohno.totalPieceTime())

// -----------------------------

// let view;
// function initialize() {
//   view = 'mont'
//   console.log('view has been set')
// }

// initialize()
// initialize()
// initialize()

// Using Closure to avoid initialize many times

// let view;
// function initialize() {
//   let count = 0;
//   return function() {
//     if (count === 0) {
//       count++;
//       view = 'mount';
//       console.log('view has been set');
//     } else {
//       return;
//     }
//   };
// }

// const startOnce = initialize();
// startOnce()
// startOnce()
// startOnce()

// -----------------------------

// const array = [1,2,3,4]
// for(var i = 0; i<array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index ' + i)
//   }, 3000)
// }

// this results in 'I am at index 4'
// using let will return 'I am at index 0,1,2,3

// const array = [1,2,3,4]
// for(let i = 0; i<array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index ' + i)
//   }, 3000)
// }

// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   (function(closureI) {
//     setTimeout(function() {
//       console.log('I am at index ' + closureI);
//     }, 3000);
//   })(i)
// }

// -----------------------------

// Prototypes

// let dragon = {
//   name: 'Tyna',
//   fire: true,
//   fight() {
//     return 5;
//   },
//   sing() {
//     if (this.fire) {
//       return `I am ${this.name}`;
//     }
//   }
// };

// let lizard = {
//   name: 'kirk',
//   fight() {
//     return 1;
//   }
// };

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// OR

// lizard.__proto__ = dragon;
// console.log(lizard.sing())
// console.log(lizard.fire)
// console.log(lizard.fight())

// lizard.__proto__ = dragon;

// for (let prop in lizard) {
//   console.log(prop);
// }

// for (let prop in lizard) {
//   if (lizard.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

// -----------------------------

// let human = {
//   mortal: true
// }

// let socrates = Object.create(human) // Created a prototype chain using human
// socrates.age = 45
// console.log(socrates.mortal)
// console.log(human.isPrototypeOf(socrates))

// -----------------------------

//Exercise - extend the functionality of a built in object

// //#1
// //Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// // new Date('1900-10-10').lastYear();
// //'1899'

// // Answer:
// Date.prototype.lastYear = function() {
//   return console.log(this.getFullYear() - 1);
// };

// new Date('1900-10-10').lastYear();

// //#Bonus
// // Mofify .map() to print '🗺' at the end of each item.
// // console.log([1, 2, 3].map());
// // 1🗺, 2🗺, 3🗺

// // Answer:
// Array.prototype.map = function() {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push((this[i] + 'hi'));
//   }
//   return arr
// };

// console.log([1, 2, 3].map());

// -----------------------------

// Function.prototype.bind = function(whoIsCallingMe) {
//   const self = this;
//   return function() {
//     return self.apply(whoIsCallingMe, arguments)
//   }
// }

// -----------------------------

// Object Oriented Programming

// factory functions

// function createElf(name, weapon) {
//   return {
//     name: name,
//     weapon: weapon,
//     attack() {
//       return `attack with ` + weapon;
//     }
//   };
// }

// the problem with this code is the attack function gets recreated for each elf

// const peter = createElf('peter', 'stone');
// console.log(peter.attack());
// const sam = createElf('sam', 'fire');
// console.log(sam.attack());

// -----------------------------

// const elfFunctions = {
//   attack() {
//     return `attack with ` + this.weapon;
//   }
// };

// function createElf(name, weapon) {
//   return {
//     name: name,
//     weapon: weapon
//   };
// }

// const peter = createElf('peter', 'stone');
// peter.attack = elfFunctions.attack();
// console.log(peter.attack());

// // Instead we can do Object.create()

// const elfFunctions = {
//   attack() {
//     return `attack with ` + this.weapon;
//   }
// };

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   (newElf.name = name), (newElf.weapon = weapon);
//   return newElf;
// }

// const peter = createElf('peter', 'stone');
// console.log(peter.attack());

// -----------------------------

// Can improve by using a Constructor function

// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function() {
//   return 'attack with ' + this.weapon;
// };

// // Elf.prototype.build = function() {
// //   function building() {
// //     console.log(this.name + ' builds a house');
// //   }
// //   // building()
// //   return building.bind(this);
// // };

// // OR

// Elf.prototype.build = function() {
//   const self = this;
//   function building() {
//     console.log(self.name + ' builds a house');
//   }
//   return building();
// };

// const peter = new Elf('peter', 'stone');
// console.log(peter);
// console.log(Elf.prototype);
// console.log(peter.build());
// console.log(peter.attack());

// // Can use new Function instead (confusing though... )

// // const Elf1 = new Function(
// //   'name',
// //   'weapon',
// //   `this.name = name;
// // this.weapon = weapon; `
// // );

// // const sarah = new Elf1('Sarah', 'Fire')
// // console.log(sarah.name)

// -----------------------------

// WITH ES6 Class

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'attack with ' + this.weapon
//   }
// }

// -----------------------------

// // Types of this
// // 1. new binding
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person('Steve', 45);

// // 2. Implicit binding
// const person2 = {
//   name: 'Karen',
//   age: 40,
//   hi() {
//     console.log('hi' + this.name);
//   }
// };

// // 3. Explicit binding
// const person3 = {
//   name: 'Billy',
//   age: 40,
//   hi: function() {
//     console.log('hi' + this.setTimeout);
//   }.bind(window)
// };

// person3.hi();

// // 4. Arrow functions
// const person4 = {
//   name: 'Billy',
//   age: 40,
//   hi: function() {
//     var inner = () => {
//       console.log('hi' + this.name);
//     };
//     return inner()
//   }
// };

// person4.hi()

// -----------------------------

// Inheritance

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'attack with ' + this.name;
//   }
// }

// const fiona = new Elf('fiona', 'stars');
// const ogre = {...fiona} //does not copy attack()

// -----------------------------

// class Character {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'attack with ' + this.name;
//   }
// }

// class Elf extends Character {
//   constructor(name, weapon, type) {
//     // console.log(this) // will not return this. must use super to get access to this
//     super(name, weapon);
//     this.type = type
//   }
// }

// class Ogre extends Character {
//   constructor(name, weapon, color) {
//     super(name, weapon)
//     this.color = color;
//   }
//   makeForts() {
//     return 'strongest fort in the world made'
//   }
// }

// const dolby = new Elf('dolby', 'stars', 'house');
// const shrek = new Ogre('Shrek', 'club', 'blue')

// -----------------------------

// class Character {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'atack with ' + this.weapon
//   }
// }

// class Queen extends Character {
//   constructor(name, weapon, type) {
//     super(name, weapon);
//     this.type = type;
//   }
//   attack() {
//     console.log(super.attack())
//     return `I am the ${this.name} of ${this.kind}, now bow down to me! `
//   }
// }
// //Polymorphism--
// //Extend the Character class to have a Queen class. The output of the below code should be:
// const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

// victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

// -----------------------------

// Functional Programming

// Pure Functions

// const array = [1, 2, 3, 4];
// function mutateArray(arr) {
//   arr.pop();
// }

// function mutateArray2(arr) {
//   arr.forEach(item => {
//     arr.push(1)
//   })
// }
// mutateArray(array);
// mutateArray2(array)

// -----------------------------

// Can change the function by creating a new array

// // No Side Effects
// const array = [1, 2, 3, 4];
// function removeLastItem(arr) {
//   const newArray = [].concat(arr);
//   newArray.pop();
//   return newArray;
// }

// function multiplyBy2(arr) {
//   return arr.map(item => {
//     return item * 2;
//   });
// }

// console.log(removeLastItem(array));
// console.log(multiplyBy2(array))

// // Input is the same as the output
// function a(num1, num2) {
//   return num1 + num2;
// }

// function b(num) {
//   return num * 2;
// }

// a(3, 4);
// b(7); //same as b(a(3,4))

// -----------------------------

// // Immutability
// const obj = { name: 'Dave'}
// function clone(obj) {
//   return {...obj} //this is pure
// }

// function updateName(obj) {
//   const obj2 = clone(obj);
//   obj2.name = 'Steve'
//   return obj2
// }

// const updatedObj = updateName(obj)
// console.log(obj, updatedObj)

// -----------------------------

// // Higher Order Function

// HOF takes one or more arguments as functions or returns a function as a result
// const hof = () => () => {
//   return 5;
// };
// console.log(hof()());

// // both are HOF

// const hof = fn => fn(5);

// const fn = function a(x) {
//   return x;
// };
// console.log(hof(fn));

// // Closure
// const closure = function() {
//   let count = 0;
//   return function increment() {
//     count++;
//     return count;
//   };
// };

// console.log(closure()())

// -----------------------------

// // Curring

// const multiply = function(x, y) {
//   // takes multiple parameters
//   return x * y;
// };

// multiply(5, 6);

// // Curring takes multiple parameters and turns it inot a function that takes one at a time
// const curriedMultiply = function(a) {
//   return function(b) {
//     return a * b;
//   };
// };

// console.log(curriedMultiply(5)(6))

// const multiplyBy5 = curriedMultiply(5)
// console.log(multiplyBy5(2))

// -----------------------------

// // Partial Application

// const multiply = function(a, b, c) {
//   return a * b * c;
// };

// // Curried Version:
// const curriedMultiply = a => b => c => {
//   return a * b * c;
// };
// curriedMultiply(3)(4)(5);

// // Partial Application
// const partialMultiplyBy5 = multiply.bind(null, 5);
// console.log(partialMultiplyBy5(4, 10));

// -----------------------------

// // Compose
// const compose = (f, g) => data => {
//   return f(g(data));
// };
// const multiplyBy3 = num => {
//   return num * 3;
// };
// const makePositive = num => {
//   return Math.abs(num);
// };
// const multiplyBy3AndAbsolute = compose(
//   multiplyBy3,
//   makePositive
// );

// console.log(multiplyBy3AndAbsolute(-50));

// -----------------------------
// // Pipe
// const pipe = (f,g) => (data) => g(f(data)) //Same as compose but from left to right

// -----------------------------

// // Amazon shopping
// const user = {
//   name: 'Kim',
//   active: true,
//   cart: [],
//   purchases: []
// };
// const amazonHistory = []

// const compose = (f, g) => (...args) => f(g(...args));
// const purchaseItem = (...fns) => fns.reduce(compose);

// function addItemToCart(user, item) {
//   const updateCart = user.cart.concat(item);
//   return Object.assign({}, user, { cart: updateCart });
// }

// function applyTaxToItems(user) {
//   amazonHistory.push(user)
//   const { cart } = user;
//   const taxRate = 1.3;
//   const updatedCart = cart.map(item => {
//     return {
//       name: item.name,
//       price: item.price * taxRate
//     };
//   });
//   return Object.assign({}, user, { cart: updatedCart });
// }

// function buyItem(user) {
//   amazonHistory.push(user)
//   return Object.assign({}, user, { purchases: user.cart });
// }

// function emptyCart(user) {
//   amazonHistory.push(user)
//   return Object.assign({}, user, { cart: [] });
// }

// console.log(
//   purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, {
//     name: 'laptop',
//     price: 300
//   })
// );

// //Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// // 3. Buy item: cart --> purchases
// // 4. Empty cart

// //Bonus:
// // accept refunds.
// // Track user history.

// -----------------------------

// Asynchronous Javascript

// With Promise: 
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => resp.json())
//   .then(console.log)

// const getUsers = async function() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data)
// }

// -----------------------------
  
// //1 Callback Queue
// setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
// setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

// //2 Job Queue
// Promise.resolve('hi').then((data)=> console.log('2', data))

// //3 JS Engine
// console.log('3','is a crowd')

// -----------------------------

// const promisify = (item, delay) =>
//   new Promise((resolve) =>
//     setTimeout(() =>
//       resolve(item), delay));

// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);

// async function parallel() {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `prallel is done: ${output1} ${output2} ${output3}`
// }

// async function race() {
//   const promises = [a(), b(), c()];
//   const output1 = await Promise.race(promises);
//   return `race is done: ${output1}`;
// }

// async function sequence() {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `sequence is done ${output1} ${output2} ${output3}`
// }

// sequence().then(console.log)
// parallel().then(console.log)
// race().then(console.log)

// -----------------------------

