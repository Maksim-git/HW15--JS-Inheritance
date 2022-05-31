const fullTime = document.querySelector("#full-time");
const shortTime = document.querySelector("#short-time");

function Clock(classTime, isClicked) {
  this.isClicked = isClicked;
  this.clickedChengeFormat = function () {
    this.isClicked = !this.isClicked;
  };
  this.formatTime = function () {
    if (this.isClicked) {
      classTime.innerHTML = new Date().toLocaleTimeString();
    } else {
      classTime.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
    }
  };
  classTime.addEventListener("click", () => {
    this.clickedChengeFormat();
  });

  setInterval(() => {
    this.formatTime();
  }, 1000);
}

function FullFormatTime(time) {
  Clock.call(this, time, true);
}

const fullFormatTime = new FullFormatTime(fullTime);

function ShotFormatTime(time) {
  Clock.call(this, time);
}

const shotFormatTime = new ShotFormatTime(shortTime);
