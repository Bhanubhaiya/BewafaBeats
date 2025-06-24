var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key); 
});

function makeSound(key) {
  switch (key) {
    case "a":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "f":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "g":
      new Audio("sounds/snare.mp3").play();
      break;
    case "h":
      new Audio("sounds/crash.mp3").play();
      break;
    case "j":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(buttonInnerHTML)
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) { 
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100); 
  }
}

document.querySelector(".brokenHeart").addEventListener("click", function () {
    var audio = new Audio("sounds/dil.mp3");
    audio.play();
    this.classList.add("pressed"); 
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});


document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    var audio = new Audio("sounds/dil.mp3");
    audio.play();
    var brokenHeartButton = document.querySelector(".brokenHeart");
    if (brokenHeartButton) {
      brokenHeartButton.classList.add("pressed");
      setTimeout(function () {
        brokenHeartButton.classList.remove("pressed");
      }, 100);
    }
  }
});