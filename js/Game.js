class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,150);
    car1.addImage(p1);
    car1.scale=0.1
    car2 = createSprite(100,300);
    car2.addImage(p2);
    car2.scale=0.5
    car3 = createSprite(100,450);
    car3.addImage(p3);
    car3.scale=0.2
    car4 = createSprite(100,600);
    car4.addImage(p4);
    car4.scale=0.8
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("skyBlue");
      var index = 0;
      var y = 0;
      var x;

      for(var plr in allPlayers){
        index = index + 1 ;
        y = y + 150;
        x = displayWidth + allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x =cars[index-1].x
          camera.position.y = displayHeight/2;
        }
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    drawSprites();
  }
}