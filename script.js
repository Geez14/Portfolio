window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (let index = 0; index < reveals.length; index++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[index].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[index].classList.add("active");
    } else {
      reveals[index].classList.remove("active");
    }
  }
}

// typer script
document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    "Tech Enthusiast",
    "Digital Native",
    "Coding Connoisseur",
    "Competitive Coder",
    "Hardware Hacker",
    "Fast and Accurate Typist",
    "Touch Typer",
    "Technical Writer",
    "Gamer",
    "Tech-Savvy Innovator",
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("typing").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 1500);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      });
    }

    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});
