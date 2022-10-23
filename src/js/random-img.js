const bgImg = document.getElementById("ad__img");

const imgs = ["book1.jpg", "book2.jpg", "css.jpg", "es6.jpg"];

function randomImg() {
  const randomIndex = Math.floor(Math.random() * imgs.length);
  bgImg.src = `src/images/bg-image/${imgs[randomIndex]}`;
}

randomImg();
setInterval(randomImg, 8000);
