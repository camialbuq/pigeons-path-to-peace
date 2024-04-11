class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 770;
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 80;
    this.height = 80;
    //this is useful because it will update the left property based on speed
    this.speed = 5;
    //no need for speed? 
    this.speedUp = false;

    //only one type of enemy pidgeon, we need more obstacles
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

  //what is this for? 
  //it will be useful to speed up the game based on days without fight 
  
  increaseSpeed(num) {
    this.speed = num;
  }
}
