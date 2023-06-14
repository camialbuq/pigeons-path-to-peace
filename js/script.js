window.onload = function () {
  const startButton = document.getElementById("start-button");
  const instructionsButton = document.getElementById("instructions-button");
  const instructionsBackButton = document.getElementById(
    "back-to-menu-button-instructions"
  );
  const restartButton = document.getElementById("restart-button");
  const backToMenuLostButton = document.getElementById(
    "back-to-menu-button-lost"
  );
  const backToMenuWonButton = document.getElementById(
    "back-to-menu-button-victory"
  );
  const optionsButton = document.getElementById("options-button");
  const optionsBackButton = document.getElementById(
    "back-to-menu-options-button"
  );
  const soundButton = document.getElementById("sound-button");
  const difficultyButton = document.getElementById("difficulty-button");

  let game;
  let startScreen = document.getElementById("start-screen");
  let gameScreenStats = document.getElementById("game-container");
  let instructionScreen = document.getElementById("instructions");
  let gameScreen = document.getElementById("game-screen");
  let optionsScreen = document.getElementById("options-screen");
  let gameEndScreenLost = document.getElementById("game-lost");
  let gameEndScreenWon = document.getElementById("game-won");
  let bgMusic = document.getElementById("bgMusic");
  let soundStatus = "On";
  let difficultyStatus = "Medium";

  startButton.addEventListener("click", function () {
    bgMusic.src = "../music/start screen.mp3";
    startGame();
  });
  instructionsButton.addEventListener("click", function () {
    readInstruction();
  });

  function readInstruction() {
    startScreen.style.display = "none";
    instructionScreen.style.display = "block";
  }

  optionsButton.addEventListener("click", function () {
    openOptions();
  });

  function openOptions() {
    startScreen.style.display = "none";
    optionsScreen.style.display = "block";
  }
  soundButton.addEventListener("click", function () {
    changeSoundOption();
  });

  function changeSoundOption() {
    if (soundStatus === "On") {
      soundStatus = "Off";
      document.getElementById("sound-status").innerHTML = "Off";
      bgMusic.muted = true;
    } else if (soundStatus === "Off") {
      soundStatus = "On";
      document.getElementById("sound-status").innerHTML = "On";
      bgMusic.muted = false;
    }
  }

  difficultyButton.addEventListener("click", function () {
    changeDifficulty();
  });

  function changeDifficulty() {
    if (difficultyStatus === "Medium") {
      difficultyStatus = "Hard";
      document.getElementById("difficulty-status").innerHTML = "Hard";
      document.getElementById("difficulty-in-game").innerHTML = "Hard";
    } else if (difficultyStatus === "Hard") {
      difficultyStatus = "Easy";
      document.getElementById("difficulty-status").innerHTML = "Easy";
      document.getElementById("difficulty-in-game").innerHTML = "Easy";
    } else if (difficultyStatus === "Easy") {
      difficultyStatus = "Medium";
      document.getElementById("difficulty-status").innerHTML = "Medium";
      document.getElementById("difficulty-in-game").innerHTML = "Medium";
    }
  }

  optionsBackButton.addEventListener("click", function () {
    returnToMenu();
  });

  instructionsBackButton.addEventListener("click", function () {
    returnToMenu();
  });

  backToMenuLostButton.addEventListener("click", function () {
    bgMusic.src = "../music/play game.mp3";
    returnToMenu();
  });
  backToMenuWonButton.addEventListener("click", function () {
    bgMusic.src = "../music/play game.mp3";
    returnToMenu();
  });

  function returnToMenu() {
    gameScreenStats.style.display = "none";
    instructionScreen.style.display = "none";
    gameEndScreenLost.style.display = "none";
    gameEndScreenWon.style.display = "none";
    optionsScreen.style.display = "none";
    startScreen.style.display = "block";
  }

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    bgMusic.src = "/music/start screen.mp3";
    gameEndScreenLost.style.display = "none";
    game = new Game();
    game.start();
  }

  function startGame() {
    game = new Game();
    game.start();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowUp", "ArrowDown"];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      let speedLevelUp = game.level * game.speedBonusUp;
      let speedLevelDown = game.level * game.speedBonusDown;

      if (difficultyStatus === "Medium") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -3 + speedLevelUp;
            break;
          case "ArrowDown":
            game.player.directionY = 3 + speedLevelDown;
            break;
        }
      }

      if (difficultyStatus === "Easy") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -5;
            break;
          case "ArrowDown":
            game.player.directionY = 5;
            break;
        }
      }

      if (difficultyStatus === "Hard") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
};
