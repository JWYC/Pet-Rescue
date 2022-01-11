const statusButton = document.querySelector("button");

const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${name} needs a nap. Zzz...`);
      this.isTired += 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play`);
        this.sleep();
      } else {
        console.log(`${name} would love to play!`);
        this.isTired = 1;
      }
    }
  };
  return pet;
};

//sora
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "cat");
const francie = createPet("Francie", "dog");

//console.log(sora, clover, baxter, cleo, francie);

//**** */Notes: sora variable is running createPet with parameters. therefore you can call the keys form createPet.

//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

clover.isTired = 8;
francie.isTired = 9;

///* notes: this is a array holding all the factory created objects.
const allPets = [sora, clover, baxter, cleo, francie];

//console.log(allPets);

/*for (let key in allPets) {
  console.log(key, allPets[key]);
}*/

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play";
    // note: the let pet variable is used to access the isTired value.
    if (pet.isTired >= 7) {
      status = "*sleeping*";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
  /// notes: showpets has a parameter of "petArray", of which you are feeding the "allPets" Array through. The "allPets" array is made up of all the factory created objects that are themselves arrays
});
