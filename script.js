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
    this.classTime.innerHTML =
      "Full format: " + new Date().toLocaleTimeString();
  } else {
    this.classTime.innerHTML =
      "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
  }
};

function FullFormatTime(time) {
  Clock.call(this, time, true);
}

FullFormatTime.prototype = Object.create(Clock.prototype);
FullFormatTime.prototype.constructor = FullFormatTime;

FullFormatTime.prototype.formatTime = function () {
  if (this.isClicked) {
    this.classTime.innerHTML =
      "Full format: " + new Date().toLocaleTimeString();
  } else {
    this.classTime.innerHTML =
      "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
  }
};

const fullFormatTime = new FullFormatTime(fullTime);

function ShortFormatTime(time) {
  Clock.call(this, time, true);
}

ShortFormatTime.prototype = Object.create(Clock.prototype);
ShortFormatTime.prototype.constructor = ShortFormatTime;

ShortFormatTime.prototype.formatTime = function () {
  if (this.isClicked) {
    this.classTime.innerHTML =
      "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
  } else {
    this.classTime.innerHTML =
      "Full format: " + new Date().toLocaleTimeString();
  }
};

const shortFormatTime = new ShortFormatTime(shortTime);

console.log(new Date().toLocaleTimeString());
