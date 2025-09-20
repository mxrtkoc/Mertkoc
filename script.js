
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
function createShootingStar() {
  const starLayer = document.querySelector(".star-shoot-layer");
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Rastgele konumdan başlasın
  const top = Math.random() * 50 + "px";
  const left = Math.random() * window.innerWidth + "px";

  star.style.top = top;
  star.style.left = left;

  starLayer.appendChild(star);

  
  setTimeout(() => {
    star.remove();
  }, 1000);
}


setInterval(() => {
  createShootingStar();
}, 150);
function createStaticDots(numDots = 50) {
  const starLayer = document.querySelector(".star-shoot-layer");

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("static-star");
    dot.style.top = Math.random() * 100 + "%";
    dot.style.left = Math.random() * 100 + "%";

    
    const delay = Math.random() * 3;
    dot.style.animationDelay = `${delay}s`;

    starLayer.appendChild(dot);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createStaticDots(400); 
});
