// Screenshots data
const screenshots = [
    {
        name: "Defeating the first boss!",
        date: "2025, September, 25",
        src:
            "images/terraria-forest.webp"
    },
    {
        name: "Finding dangerous temples...",
        date: "2025, September, 27",
        src:
            "images/terraria-temple.webp"
    },
    {
        name: "Surviving the heat.",
        date: "2025, October, 1",
        src:
            "images/terraria-underworld.webp"
    },
    {
        name: "Relaxing on the beach!",
        date: "2025, October, 7",
        src:
            "images/terraria-beach.webp"
    },
    {
        name: "Discovering magical places!",
        date: "2025, October, 7",
        src:
            "images/terraria-hallow.webp"
    },
    {
        name: "Gathering resources.",
        date: "2025, October, 13",
        src:
            "images/terraria-mushroom.webp"
    }
];

// Script to add images to the page.
insertScreenshots(screenshots);

function insertScreenshots(screenshotsArray) {
    let screenshotsHTML = screenshotsArray.map((screenshot) => {
        return `
	<figure class="box">
	    <figcaption>
    		<h3>${screenshot.name}</h3>
    		<p><strong>Date:</strong> ${screenshot.date}</p>
    	</figcaption>
        <img src="${screenshot.src}" alt="${screenshot.name}" loading="lazy">
	</figure>
	`;
    });

    document.querySelector(".album").innerHTML = screenshotsHTML.join("");
}