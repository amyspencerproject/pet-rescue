const statusButton = document.querySelector("button");
const refreshButton = document.querySelector(".refresh");
const pets = document.querySelector(".all-pets");



const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, //scale from 1 (ready to go) to 10 (exhausted)
        sleep: function() {
            console.log(`${this.name} needs a nap. Zzzzzzz . . . .`);
            this.isTired = 1;
        },
        play: function() {
            if (this.isTired === 10) {
                console.log("Too tired to play now");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired +=1;
            }
        }
    };

    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet ("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;

const allPets = [
    sora,
    clover,
    baxter,
    cleo,
    francine
];

const showPets = function(petArray) {
    pets.innerHTML = "";
    for (let pet of petArray) {
        let status = "ready to play!"
        if (pet.isTired >= 7) {
            status = "sleeping"
        }
        const li = document.createElement("li");
        li.innerHTML = `<span class=pet-name>${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
    statusButton.classList.add("hide");
    refreshButton.classList.remove("hide");
};

statusButton.addEventListener("click", function () {
    pets.classList.remove("hide")
    showPets(allPets);
});

refreshButton.addEventListener("click", function (){
    refreshButton.classList.add("hide");
    pets.classList.add("hide");
    statusButton.classList.remove("hide");
});

