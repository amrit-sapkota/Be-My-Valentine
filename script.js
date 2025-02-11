const yesButton = document.querySelector(".yesBtn");
const noButton = document.querySelector(".noBtn");
const box = document.querySelector(".box");
const question = document.getElementById("question");

function getRandomScreenPosition() {
  const randomInnerWidth = Math.random() * (window.innerWidth - 100); // 100px inside
  const randomInnerHeight = Math.random() * (window.innerHeight - 100);
  return { randomInnerWidth, randomInnerHeight };
}

noButton.addEventListener("mouseover", function () {
  const { randomInnerWidth, randomInnerHeight } = getRandomScreenPosition();
  this.style.position = "fixed";
  this.style.left = `${randomInnerWidth}px`;
  this.style.top = `${randomInnerHeight}px`;
});

yesButton.addEventListener("click", function () {
  box.innerHTML = `
     <div style="color:white;">
            <h2 style="font-size:32px;">Yay!💖</h2>
            <p style="font-size:20px;">You've made me the happiest person ever!</p>
            <div id="love"></div>
        </div>
        `;
  loveIsInTheAir();
});

function loveIsInTheAir() {
  const loveContainer = document.getElementById("love");
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 30 + 10}px`;
    heart.style.animation = `float ${Math.random() * 5 + 2}s infinite`; // adding float animation
    loveContainer.appendChild(heart);
  }
}
