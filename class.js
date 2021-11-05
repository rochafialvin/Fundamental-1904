////////////
/* OBJECT */
////////////

/* key : value */
/* value : function, key : method */
/* value : selain function , key : property */

const captain = {
  name: "Kuroky",
  pets: ["cat", "fox", "bird"],
  isActive: true,
  height: 170,
  play: (game) => {
    console.log(`Playing ${game}`);
  },
  fullName: { firstName: "Kuro", lastName: "Salehi" },
};

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
class Player {
  constructor(_name, _age, _nationality, _position, _team) {
    this.name = _name;
    this.age = _age;
    this.nationality = _nationality;
    this.position = _position;
    this.team = _team;
  }

  intro() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const dendi = new Player("Danil Ishutin", 30, "Ukraine", "Captain", "B8");
const kuroky = new Player("Kuro Salehi", 28, "Geramany", "Captain", "Nigma");

dendi.intro();
kuroky.intro();
