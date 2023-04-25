document.getElementsByClassName("article")[0].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/to-do/");
});

document.getElementsByClassName("article")[1].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/cards/");
});

document.getElementsByClassName("article")[2].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/calculator/");
});

document.getElementsByClassName("article")[3].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/quote/");
});

document.getElementsByClassName("article")[4].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/stickers/");
});

document.getElementsByClassName("article")[5].addEventListener("click", () => {
  window.open("https://gengdeng.github.io/fetch-img/");
});

const backToTopButton = document.querySelector("#back-to-top");
const arrowUp = document.querySelector(".fa-circle-arrow-up");
const mySocial = document.querySelectorAll(".my-social ");

function handleScroll() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
    arrowUp.classList.add("show");
    arrowUp.classList.add("fade-in");
    arrowUp.classList.remove("fade-out");
  } else {
    backToTopButton.classList.remove("show");
    arrowUp.classList.remove("fade-in");
    arrowUp.classList.add("fade-out");
    arrowUp.addEventListener(
      "animationend",
      () => {
        arrowUp.classList.remove("show");
      },
      { once: true }
    );
  }
}

function handleBackToTop() {
  window.scrollTo({
    top: 0,
  });
}

function handleSocialMouseover(event) {
  event.target.classList.add("fa-beat");
}

function handleSocialMouseout(event) {
  event.target.classList.remove("fa-beat");
}

function handleArrowUpMouseover() {
  backToTopButton.classList.add("fa-bounce");
}

function handleArrowUpMouseout() {
  backToTopButton.classList.remove("fa-bounce");
}

window.addEventListener("scroll", handleScroll);
backToTopButton.addEventListener("click", handleBackToTop);
arrowUp.addEventListener("mouseover", handleArrowUpMouseover);
arrowUp.addEventListener("mouseout", handleArrowUpMouseout);

mySocial.forEach((element) => {
  element.addEventListener("mouseover", handleSocialMouseover);
  element.addEventListener("mouseout", handleSocialMouseout);
});
