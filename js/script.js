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
  let game;
  let startScreen = document.getElementById("start-screen");
  let gameScreenStats = document.getElementById("game-container");
  let instructionScreen = document.getElementById("instructions");
  let gameScreen = document.getElementById("game.screen");
  let gameEndScreenLost = document.getElementById("game-lost");
  let gameEndScreenWon = document.getElementById("game-won");

  startButton.addEventListener("click", function () {
    startGame();
  });
  instructionsButton.addEventListener("click", function () {
    readInstruction();
  });
  instructionsBackButton.addEventListener("click", function () {
    returnToMenu();
  });
  backToMenuLostButton.addEventListener("click", function () {
    returnToMenu();
  });
  backToMenuWonButton.addEventListener("click", function () {
    returnToMenu();
  });
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function readInstruction() {
    startScreen.style.display = "none";
    instructionScreen.style.display = "block";
  }

  function returnToMenu() {
    gameScreenStats.style.display = "none";
    instructionScreen.style.display = "none";
    gameEndScreenLost.style.display = "none";
    gameEndScreenWon.style.display = "none";
    startScreen.style.display = "block";
  }

  function restartGame() {
    location.reload();
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

  window.addEventListener("keydown", handleKeydown);
};
