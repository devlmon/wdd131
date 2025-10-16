// Script to add the detail of when the page was last modified to the footer.
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last modification: ${document.lastModified}`;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});