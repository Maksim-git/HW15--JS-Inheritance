const fullTime = document.querySelector("#full-time");
const shortTime = document.querySelector("#short-time");

function Clock(classTime, isClicked) {
  this.classTime = classTime;
  this.isClicked = isClicked;
  classTime.addEventListener("click", () => {
    this.clickedChengeFormat();
  });
  setInterval(() => {
    this.formatTime();
  }, 1000);
}

Clock.prototype.clickedChengeFormat = function () {
  this.isClicked = !this.isClicked;
};

Clock.prototype.formatTime = function () {
  if (this.isClicked) {
    this.classTime.innerHTML = new Date().toLocaleTimeString();
  } else {
    this.classTime.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
  }
};

function FullFormatTime(time) {
  Clock.call(this, time, true);
}

FullFormatTime.prototype = Object.create(Clock.prototype);
FullFormatTime.prototype.constructor = FullFormatTime;

const fullFormatTime = new FullFormatTime(fullTime);

function ShotFormatTime(time) {
  Clock.call(this, time);
}

ShotFormatTime.prototype = Object.create(Clock.prototype);
ShotFormatTime.prototype.constructor = ShotFormatTime;

const shotFormatTime = new ShotFormatTime(shortTime);
