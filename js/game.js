class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreenStats = document.getElementById("game-container");
    this.instructionScreen = document.getElementById("instructions");
    this.gameScreen = document.getElementById("game.screen");
    this.gameEndScreenLost = document.getElementById("game-lost");
    this.gameEndScreenWon = document.getElementById("game-won");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "/images/hero-pigeon.png"
    );
    this.height = 500;
    this.width = 800;
    this.obstacles = [];
    this.fightsAvoided = 0;
    this.daysWithoutFight = 0;
    this.gameIsOver = false;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreenStats.style.display = "block";
    //this.gameScreen.style.height = `${this.height}px`;
    //this.gameScreen.style.width = `${this.width}px`;
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        document.querySelector(
          "#days-lost"
        ).innerHTML = `${this.fightsAvoided}`;
        this.endGame();
      } else if (obstacle.top > this.height) {
        this.fightsAvoided++;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        if (this.fightsAvoided === 2000) {
          this.endGame();
        } else {
          document.querySelector(
            "#days-game"
          ).innerHTML = `${this.fightsAvoided}`;
        }
      }
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    if (this.fightsAvoided === 2000) {
      this.gameEndScreenWon.style.display = "block";
    } else {
      this.gameEndScreenLost.style.display = "block";
    }
  }
}
