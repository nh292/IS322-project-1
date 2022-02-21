let current=1
const MAX_SLIDES = 3
const INTERVAL = 3000


setInterval(function() {
    if (current > MAX_SLIDES) {
        current = 1
    }

    const previous = document.getElementById("slide" + (current == 1? MAX_SLIDES: (current - 1)));
    const element = document.getElementById("slide" + current);
    current ++
    previous.classList.add("d-none")
    element.classList.remove("d-none")
}, INTERVAL);
