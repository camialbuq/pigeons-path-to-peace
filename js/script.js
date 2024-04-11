//the script file will handle all that is not inside of the game scren itself:

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
    bgMusic.src = "./music/start screen.mp3"; //start the game music which is different from the menu screen music
    startGame(); //call to start game
  });
  instructionsButton.addEventListener("click", function () {
    readInstruction(); //how to play
  });

  function readInstruction() {
    startScreen.style.display = "none"; //hide the initial screen
    instructionScreen.style.display = "flex"; //show the instructions screen
  }

  //could also just select a difficulty in the same intro screen?
  optionsButton.addEventListener("click", function () {
    openOptions();
  });

  //*****OPTIONS SCREEN */
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

  //***handling the back to menu button from whichever screen you are  */
  optionsBackButton.addEventListener("click", function () {
    returnToMenu();
  });

  instructionsBackButton.addEventListener("click", function () {
    returnToMenu();
  });

  backToMenuLostButton.addEventListener("click", function () {
    bgMusic.src = "./music/play game.mp3";
    returnToMenu();
  });
  backToMenuWonButton.addEventListener("click", function () {
    bgMusic.src = "./music/play game.mp3";
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

  //RESTARTING GAME
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    bgMusic.src = "./music/start screen.mp3";
    gameEndScreenLost.style.display = "none";
    game = new Game();
    game.start();
  }

  //**playing game  */
  function startGame() {
    game = new Game();
    game.start();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowUp", "ArrowDown"];

    //here we handle the difficulties inside of the game
    //based only on speed
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      let speedLevelUp = game.level * game.speedBonusUp;
      let speedLevelDown = game.level * game.speedBonusDown;

      if (difficultyStatus === "Medium") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -4 + speedLevelUp;
            break;
          case "ArrowDown":
            game.player.directionY = 4 + speedLevelDown;
            break;
        }
      }

      if (difficultyStatus === "Easy") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -6;
            break;
          case "ArrowDown":
            game.player.directionY = 6;
            break;
        }
      }

      if (difficultyStatus === "Hard") {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -2;
            break;
          case "ArrowDown":
            game.player.directionY = 2;
            break;
        }
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
};
