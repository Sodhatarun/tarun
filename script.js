function startExperience() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "flex";
}

function showLove() {
    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    document.getElementById("bgMusic").play();
    confetti();
    typeEffect();
}
// Make "No" button run away
function moveNoButton() {
    let btn = document.getElementById("noBtn");

    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 60);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

let text = "I love you ❤️ forever and always...";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

function confetti() {
    for (let i = 0; i < 50; i++) {
        let c = document.createElement("div");
        c.innerHTML = "🎉";
        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.animation = "fallConfetti 3s linear";
        document.body.appendChild(c);

        setTimeout(() => c.remove(), 3000);
    }
}