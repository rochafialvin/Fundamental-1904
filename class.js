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

const person = {
  firstName: "Topias",
  lastName: "Taavitsainen",
  nickname: "Topson",
  greet: function (time) {
    console.log(`Good ${time}`);
  },
  intro: function (x) {
    this.greet(x);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

person.intro("morning");
