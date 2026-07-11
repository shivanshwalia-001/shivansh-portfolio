const text = [
    "B.Tech Computer Science Student",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Python Developer"
];

let count = 0;

setInterval(() => {
    document.getElementById("typing").textContent = text[count];
    count = (count + 1) % text.length;
}, 2000);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    // If we're at the bottom of the page, force Contact to be active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        current = "contact";
    } else {
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.id;
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});