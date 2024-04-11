class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreenStats = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreenLost = document.getElementById("game-lost");
    this.gameEndScreenWon = document.getElementById("game-won");
    //the player constructor is: constructor(gameScreen, left, top, width, height, imgSrc)
    this.player = new Player(
      this.gameScreen,
      5,
      50,
      100,
      100,
      "./images/hero-pigeon.png"
    );
    this.level = 1;
    this.speedBonusUp = -1;
    this.speedBonusDown = 1;
    this.height = 500;
    this.width = 800;
    this.obstacles = [];
    this.fightsAvoided = 0;
    this.daysWithoutFight = 0;
    this.lives = 1; //in this game only 1 life, hit the obstacle u die
    this.gameIsOver = false;
    this.counter = 0;
    this.speedUp = false;
    this.bgMusic = document.getElementById("bgMusic");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    //initial background image is here
    this.gameScreen.style.backgroundImage = "url('./images/background1.png')";
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

    //HANDLING THE DIFFERENT BACKGROUND IMAGES
    //in this case the time is determining the change of background
    //in cat's game, it will be by the amount of energy collected
    if (this.daysWithoutFight === 30) {
      this.gameScreen.style.backgroundImage = "url('./images/background2.png')";
    }

    if (this.daysWithoutFight === 60) {
      this.gameScreen.style.backgroundImage = "url('./images/background3.png')";
    }

    if (this.daysWithoutFight === 90) {
      this.gameScreen.style.backgroundImage = "url('./images/background4.png')";
    }

    if (this.daysWithoutFight === 120) {
      this.gameScreen.style.backgroundImage = "url('./images/background5.png')";
    }

    if (this.daysWithoutFight === 150) {
      this.gameScreen.style.backgroundImage = "url('./images/background6.png')";
    }

    if (this.daysWithoutFight === 180) {
      this.gameScreen.style.backgroundImage = "url('./images/background7.png')";
    }

    if (this.daysWithoutFight === 210) {
      this.gameScreen.style.backgroundImage = "url('./images/background8.png')";
    }

    if (this.daysWithoutFight === 240) {
      this.gameScreen.style.backgroundImage = "url('./images/background9.png')";
    }

    if (this.daysWithoutFight === 270) {
      this.gameScreen.style.backgroundImage =
        "url('./images/background10.png')";
    }

    if (this.daysWithoutFight === 300) {
      this.bgMusic.src = "./music/last minute of game.mp3";
      this.gameScreen.style.backgroundImage =
        "url('./images/background11.png')";
    }

    if (this.daysWithoutFight === 335) {
      this.gameScreen.style.backgroundImage =
        "url('./images/background12.png')";
    }

    if (this.daysWithoutFight === 365) {
      this.winGame();
    }

    //Increase the Players Level
    //switching: we change background based on energy level which is fightsavoided
    //we change the player level based on time score, which is the "boosted time"
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
    //this is what the increase speed in obstacles was for!!
    //we increase the speed based on the dayswithout a fight
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
