// Carousel Functionality
const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1025/600/300",
  "https://picsum.photos/id/1035/600/300"
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("carousel-img");
  img.src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Fetch Joke from API
async function fetchJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await res.json();
  document.getElementById("joke-text").innerText = data.joke;
}

// Load initial joke
window.onload = fetchJoke;
