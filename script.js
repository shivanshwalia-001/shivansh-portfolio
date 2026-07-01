const text = [
    "B.Tech Computer Science Student",
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast"
];

let count = 0;

setInterval(() => {
    document.getElementById("typing").textContent =
        text[count];

    count = (count + 1) % text.length;
}, 2000);