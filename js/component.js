class Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}

class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);
    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    this.top += this.directionY;

    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    /* if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    } */

    this.updatePosition();
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Crash!");
      return true;
    } else {
      return false;
    }
  }
}

class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      0,
      Math.floor(Math.random() * 300 + 70),
      100,
      150,
      "/images/enemy-pigeon.png"
    );
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
