// Script to add the detail of when the page was last modified to the footer.
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last modification: ${document.lastModified}`;

// Script to randomly add a different fun fact every day.
const terrariaFunFactsArray = [
    "Terraria was released on May 16, 2011, by Re-Logic.",
    "The game was originally developed by just three people.",
    "Terraria has over 5,000 unique items to discover and use.",
    "There are 20 different bosses, each with unique mechanics.",
    "You can fish in lava using special gear like the Hotline Fishing Hook.",
    "Terraria features 27 distinct biomes, including the mysterious Underground Desert.",
    "The Moon Lord is considered the final boss of the game.",
    "You can ride a unicorn, a UFO, and even a giant bee as mounts.",
    "Terraria includes references to other games like Minecraft and Castlevania.",
    "The game supports both single-player and multiplayer modes.",
    "Terraria's world is procedurally generated, making each map unique.",
    "There's a hidden developer armor set for each member of the dev team.",
    "You can build houses for NPCs, who move in and offer services.",
    "The game has a dynamic day-night cycle that affects gameplay.",
    "Hardmode is triggered by defeating the Wall of Flesh.",
    "There's a secret pet called the Zephyr Fish that's extremely rare.",
    "Terraria has been ported to over 10 platforms, including mobile and consoles.",
    "The game includes over 400 enemies, from slimes to eldritch horrors.",
    "You can dye your armor and accessories for custom looks.",
    "Terraria's soundtrack is iconic, with over 60 unique music tracks."
];

function getRandomFunFact() {
    return terrariaFunFactsArray[Math.floor(Math.random() * terrariaFunFactsArray.length)];
}

let funFact = {
    date: localStorage.getItem('dateSaved') != null ? localStorage.getItem('dateSaved') : '',
    text: localStorage.getItem('textSaved') != null ? localStorage.getItem('textSaved') : '',
    output: function () {
        funFactText.innerHTML = `${this.text}`;
    },
    setDateValue: function (date) {
        this.date = date;
        localStorage.setItem('dateSaved', date);
    },
    setTextValue: function (text) {
        this.text = text;
        localStorage.setItem('textSaved', text);
    }
};

if (today.toLocaleDateString('en-US') != funFact.date) {
    funFact.setDateValue(today.toLocaleDateString('en-US'));
    funFact.setTextValue(getRandomFunFact());
    funFact.output();
}
else {
    funFact.output();
}

// Hamburger Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
