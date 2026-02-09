function goToQuestion() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

let noTexts = [
  "Are you sure? 😶",
  "Think again 😐",
  "Chiku please 🥺",
  "That hurts 💔",
  "Last chance 😭"
];
let count = 0;

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.innerText = noTexts[count % noTexts.length];
  count++;
}

function yesClicked() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
  document.getElementById("music").play();
  createHearts();
}

function goToLove() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
