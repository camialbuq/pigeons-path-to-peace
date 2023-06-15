class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 770;
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 80;
    this.height = 80;
    this.speed = 5;
    this.speedUp = false;
    this.element = document.createElement("img");

    this.element.src = "./images/enemy-pigeon.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.left -= this.speed;
    this.updatePosition();
  }

  increaseSpeed(num) {
    this.speed = num;
  }
}
