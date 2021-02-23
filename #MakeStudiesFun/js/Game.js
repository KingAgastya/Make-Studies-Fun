class Game{
    constructor(){

    }
    display(){
        if (gameState === "Start"){
            textSize(30);
            text("Welcome to the App", 450, 250);
            
            startButton.visible = true;
            form.hide();
            robot.visible = false;
            cloud.visible = false;
            
            if (mousePressedOver(startButton)){
              gameState = "form";
            }
        }
          
        if (gameState === "form"){
            startButton.visible = false;
            form.show()
            form.display()
        }
        
        if (gameState === "welcome"){
            form.hide();
            form.visible = "false"
        
            robot.visible = "true"

            robot.scale = 2
            cloud.scale = 0.5
            cloud.visible = "true"
            cloud.depth = 0
        
            text("You have " + form.display.hours + ": " + form.display.mins + ": "+ form.display.secs, 300, 200)
            cloud.visible = "false"
        }
    }
   
}