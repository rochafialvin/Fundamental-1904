////////////
/* OBJECT */
////////////

/* key : value */
/* value : function, key : method */
/* value : selain function , key : property */

// const captain = {
//   name: "Kuroky",
//   pets: ["cat", "fox", "bird"],
//   isActive: true,
//   height: 170,
//   play: (game) => {
//     console.log(`Playing ${game}`);
//   },
//   fullName: { firstName: "Kuro", lastName: "Salehi" },
// };

////////////////////////////
/* Access with bracket [] */
////////////////////////////

// console.log(captain["name"]);
// console.log(captain["height"]);
// captain["play"]("Wild Rift");

///////////////////////
/* Access with dot . */
///////////////////////

// console.log(captain.name);
// console.log(captain.fullName.firstName);
// console.log(captain.fullName.lastName);
// console.log(captain.pets);
// captain.play("Dota");

////////////////////
/* Changing value */
////////////////////

// captain.pets = "dog";
// captain.height = 169;
// captain.play = (game) => {
//   console.log(`Let's play some ${game}`);
// };
// captain.play("dota");

/////////////////
/* Add new key */
/////////////////

// captain.nationality = "Germany";
// captain.greet = (time) => {
//   console.log(`Good ${time}`);
// };

// console.log(captain);
// console.log(captain.nationality);
// captain.greet("morning");

/////////////////
/* Destructure */
/////////////////
// const [x, y, z] = ["sun", "mon", "tue"];
// // x = sun
// // y = mon
// // z = tue

// const { name, pets, play } = captain;
// console.log(name);
// console.log(pets);
// console.log(play);

// const { firstName, lastName } = captain.fullName;

// console.log(firstName);
// console.log(lastName);

//////////////////
/* THIS KEYWORD */
//////////////////

// const person = {
//   firstName: "Topias",
//   lastName: "Taavitsainen",
//   nickname: "Topson",

//   intro: function (x) {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// person.intro("morning");

///////////
/* CLASS */
///////////

/* Blueprint untuk membuat object, dengan class akan mempermudah dalam membuat object */

// const kuroky = {
//   name: "Kuro Salehi",
//   age: 28,
//   nationality: "Germany",
//   position: "Captain",
//   team: "Nigma",
// };

// const ceb = {
//   name: "Sebastien Deb",
//   age: 28,
//   nationality: "France",
//   position: "Coach",
//   team: "OG",
// };

// const puppey = {
//   name: "Clement Ivanov",
//   age: 30,
//   nationality: "Estonia",
//   position: "Captain",
//   team: "Team Secret",
// };

/* Syntax */
// class Player {
//   constructor(_name, _age, _nationality, _position, _team) {
//     this.name = _name;
//     this.age = _age;
//     this.nationality = _nationality;
//     this.position = _position;
//     this.team = _team;
//   }

//   intro() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const dendi = new Player("Danil Ishutin", 30, "Ukraine", "Captain", "B8");
// const kuroky = new Player("Kuro Salehi", 28, "Geramany", "Captain", "Nigma");

// dendi.intro();
// kuroky.intro();

// console.log(Player);

/////////////////
/* INHERITANCE */
////////////////

class Player {
  constructor(name, nickname, nationality) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }

  intro() {
    console.log(`My name is ${this.name} but you can call me ${this.nickname}`);
  }
}

class CasualPlayer extends Player {
  constructor(name, nickname, nationality, job) {
    super(name, nickname, nationality);
    this.job = job;
  }

  myJob() {
    console.log(`I'm not pro player so i have a job, that is ${this.job}`);
  }
}

const alvin = new CasualPlayer(
  "Alvin Rochafi",
  "rochafi",
  "Indonesia",
  "Lecturer"
);

alvin.intro();
alvin.myJob();

class ProPlayer extends Player {
  constructor(name, nickname, nationality, team) {
    super(name, nickname, nationality);
    this.team = team;
  }

  myTeam() {
    console.log(`I'm a pro player so i have a team, that is ${this.team}`);
  }
}

const tanjirou = new ProPlayer("Tanjirou", "Tanji", "Japan", "A");
tanjirou.intro();
tanjirou.myTeam();

/////////////////////////////////
/* Object For Every Data Types */
/////////////////////////////////

// String
// const priString = "Today is raining";
// const objString = new String("Today is sunny");

// console.log(priString);
// console.log(objString);

// objString.toUpperCase();
// priString.toUpperCase();

// Number
// const priNumber = 37000;
// const objNumber = new Number(39000);

// console.log(typeof priNumber);
// console.log(typeof objNumber);

// console.log(priNumber.toLocaleString("id"));
// console.log(objNumber.toLocaleString("id"));

// Boolean
// const priBoolean = true;
// const objBoolean = new Boolean(false);

// console.log(typeof priBoolean);
// console.log(typeof objBoolean);
