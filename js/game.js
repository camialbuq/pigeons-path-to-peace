class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreenStats = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreenLost = document.getElementById("game-lost");
    this.gameEndScreenWon = document.getElementById("game-won");
    this.player = new Player(
      this.gameScreen,
      5,
      50,
      100,
      100,
      "../images/hero-pigeon.png"
    );
    this.level = 1;
    this.speedBonusUp = -1;
    this.speedBonusDown = 1;
    this.height = 500;
    this.width = 800;
    this.obstacles = [];
    this.fightsAvoided = 0;
    this.daysWithoutFight = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.counter = 0;
    this.speedUp = false;
    this.bgMusic = document.getElementById("bgMusic");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.backgroundImage =
      "url('../images/background-inGame.png')";
    this.gameScreenStats.style.display = "block";
    document.getElementById("player-level").innerHTML = `${this.level}`;
    document.getElementById("days-game").innerHTML = `${this.daysWithoutFight}`;
    document.getElementById(
      "fights-Avoided"
    ).innerHTML = `${this.fightsAvoided}`;
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
    console.log(this.daysWithoutFight);
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();
    this.counter += 1;
    if (this.counter % 25 === 0) {
      this.daysWithoutFight += 1;
      document.getElementById(
        "days-game"
      ).innerHTML = `${this.daysWithoutFight}`;
    }
    if (this.daysWithoutFight === 60) {
      this.gameScreen.style.backgroundImage =
        "url('../images/backgroundColorGrass.png')";
    }

    if (this.daysWithoutFight === 120) {
      this.gameScreen.style.backgroundImage =
        "url('../images/backgroundColorForest.png')";
    }

    if (this.daysWithoutFight === 180) {
      this.gameScreen.style.backgroundImage =
        "url('../images/backgroundColorFall.png')";
    }

    if (this.daysWithoutFight === 240) {
      this.gameScreen.style.backgroundImage =
        "url('../images/backgroundColorDesert.png')";
    }

    if (this.daysWithoutFight === 300) {
      this.bgMusic.src = "../music/last minute of game.mp3";
      this.gameScreen.style.backgroundImage =
        "url('../images/backgroundColorDesert.png')";
    }

    if (this.daysWithoutFight === 365) {
      this.winGame();
    }

    //Increase the Players Level
    if (this.fightsAvoided === 10) {
      this.level = 2;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 20) {
      this.level = 3;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 30) {
      this.level = 4;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 40) {
      this.level = 5;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 50) {
      this.level = 6;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 60) {
      this.level = 6;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 70) {
      this.level = 7;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 80) {
      this.level = 8;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 90) {
      this.level = 9;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }
    if (this.fightsAvoided === 100) {
      this.level = 10;
      document.getElementById("player-level").innerHTML = `${this.level}`;
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      if (this.daysWithoutFight > 4 && this.daysWithoutFight < 10) {
        obstacle.increaseSpeed(6);
      }
      if (this.daysWithoutFight > 10 && this.daysWithoutFight < 20) {
        obstacle.increaseSpeed(7);
      }
      if (this.daysWithoutFight > 20 && this.daysWithoutFight < 30) {
        obstacle.increaseSpeed(8);
      }
      if (this.daysWithoutFight > 30 && this.daysWithoutFight < 45) {
        obstacle.increaseSpeed(9);
      }
      if (this.daysWithoutFight > 44 && this.daysWithoutFight < 60) {
        obstacle.increaseSpeed(10);
      }
      if (this.daysWithoutFight > 59 && this.daysWithoutFight < 90) {
        obstacle.increaseSpeed(11);
      }
      if (this.daysWithoutFight > 90 && this.daysWithoutFight < 120) {
        obstacle.increaseSpeed(12);
      }
      if (this.daysWithoutFight > 120 && this.daysWithoutFight < 150) {
        obstacle.increaseSpeed(13);
      }
      if (this.daysWithoutFight > 150 && this.daysWithoutFight < 180) {
        obstacle.increaseSpeed(14);
      }
      if (this.daysWithoutFight > 180 && this.daysWithoutFight < 210) {
        obstacle.increaseSpeed(15);
      }
      if (this.daysWithoutFight > 210 && this.daysWithoutFight < 240) {
        obstacle.increaseSpeed(16);
      }
      if (this.daysWithoutFight > 240 && this.daysWithoutFight < 270) {
        obstacle.increaseSpeed(17);
      }
      if (this.daysWithoutFight > 270 && this.daysWithoutFight < 300) {
        obstacle.increaseSpeed(18);
      }
      if (this.daysWithoutFight > 300 && this.daysWithoutFight < 330) {
        obstacle.increaseSpeed(19);
      }
      if (this.daysWithoutFight > 330 && this.daysWithoutFight < 366) {
        obstacle.increaseSpeed(20);
      }

      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
        document.getElementById(
          "days-lost"
        ).innerHTML = `${this.daysWithoutFight}`;
      } else if (obstacle.left < this.player.left - 10) {
        this.fightsAvoided++;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        document.getElementById(
          "fights-Avoided"
        ).innerHTML = `${this.fightsAvoided}`;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      const newObst = new Obstacle(this.gameScreen);

      this.obstacles.push(newObst);
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreenStats.style.display = "none";
    this.gameEndScreenLost.style.display = "block";
    this.switchMusic();
  }

  winGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreenStats.style.display = "none";
    this.gameEndScreenWon.style.display = "block";
    this.switchMusic();
  }

  switchMusic() {
    if (
      this.gameScreenStats.style.display === "none" &&
      this.gameEndScreenLost.style.display === "block"
    ) {
      this.bgMusic.src = "./music/lost-game.mp3";
    } else if (
      this.gameScreenStats.style.display === "none" &&
      this.gameEndScreenWon.style.display === "block"
    ) {
      this.bgMusic.src = "./music/won game.mp3";
    }
  }
}
