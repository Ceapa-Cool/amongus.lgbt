import drawingsData from './data/data.json' assert { type: 'json' };

const themes = [
    '🎨 Colors',
    '🚩 Flags',
    '🐾 Animals',
    '🤖 Technology',
    '🏞 Landscapes',
];

const gallery = document.getElementById("gallery");

drawingsData.forEach((day, index) => {
    const dayWrapper = document.createElement("div");
    dayWrapper.classList.add("day-wrapper");

    const dateRow = document.createElement("div");
    dateRow.classList.add("date-row");

    const date = document.createElement("h2");
    date.id = `day-${index + 1}-heading`;
    date.innerText = `Day ${index + 1} - ${themes[index]} (${day.date})`;
    dateRow.appendChild(date);
    gallery.appendChild(dateRow);

    dayWrapper.setAttribute('role', 'group');
    dayWrapper.setAttribute('aria-labelledby', `day-${index + 1}-heading`);

    day.drawings.forEach((drawing, drawingIndex) => {
        const drawingWrapper = document.createElement("div");
        drawingWrapper.classList.add("drawing");
        drawingWrapper.style.animationDelay = `${0.2 * drawingIndex}s`;

        const img = document.createElement("img");
        img.src = drawing.image;
        img.alt = `Drawing by ${drawing.artist}`;
        img.setAttribute('aria-describedby', `${drawing.artist}-description`);
        drawingWrapper.appendChild(img);

        const artist = document.createElement("p");
        artist.id = `${drawing.artist}-description`;
        artist.innerText = drawing.artist;
        drawingWrapper.appendChild(artist);

        dayWrapper.appendChild(drawingWrapper);
    });

    gallery.appendChild(dayWrapper);
});
