const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log("finished loading");
}

function printImage(imgNumber) {
  const image = new Image();
  image.src = `${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();