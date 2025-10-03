// Hamburger Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Filtered Temples

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Madrid Spain",
		location: "Madrid, Spain",
		dedicated: "1999, March, 21",
		area: 45800,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
	},
	{
		templeName: "Caracas Venezuela",
		location: "Caracas, Venezuela",
		dedicated: "2000, August, 20",
		area: 15332,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
	},
	{
		templeName: "Tokyo Japan",
		location: "Tokyo, Japan",
		dedicated: "1980, October, 29",
		area: 53997,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154.jpg"
	}
];

insertTemples(temples);

function insertTemples(templeArray) {
	let templesHTML = templeArray.map((temple) => {
		return `
	<figure>
	    <figcaption>
    		<h3>${temple.templeName}</h3>
    		<p><strong>Location:</strong> ${temple.location}</p>
			<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    		<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    	</figcaption>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
	</figure>
	`;
	});

	document.querySelector(".album").innerHTML = templesHTML.join("");
}

// Filter Buttons

const dateOldButton = document.getElementById('dateOldFilter');
const dateNewButton = document.getElementById('dateNewFilter');
const areaLargeButton = document.getElementById('areaLargeFilter');
const areaSmallButton = document.getElementById('areaSmallFilter');
const homeButton = document.getElementById('home');

dateOldButton.addEventListener('click', () => {
	const sortedByOld = temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) < 1900);
	document.querySelector(".album").innerHTML = insertTemples(sortedByOld).join("");
});

dateNewButton.addEventListener('click', () => {
	const sortedByNew = temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) > 2000);
	document.querySelector(".album").innerHTML = insertTemples(sortedByNew).join("");
});

areaLargeButton.addEventListener('click', () => {
	const sortedByLarge = temples.filter(temple => temple.area > 90000);
	document.querySelector(".album").innerHTML = insertTemples(sortedByLarge).join("");
});

areaSmallButton.addEventListener('click', () => {
	const sortedBySmall = temples.filter(temple => temple.area < 10000);
	document.querySelector(".album").innerHTML = insertTemples(sortedBySmall).join("");
});

homeButton.addEventListener('click', () => {
	insertTemples(temples);
});