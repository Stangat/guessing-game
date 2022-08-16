class GuessingGame {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    let guessNumber = Math.round((this.max + this.min) / 2);
    return guessNumber;
  }

  lower() {
    return (this.max = Math.round((this.max + this.min) / 2));
  }

  greater() {
    return (this.min = Math.round((this.max + this.min) / 2));
  }
}

module.exports = GuessingGame;
