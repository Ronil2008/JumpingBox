var canvas;
var music;
var box
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas=createCanvas(800,600);
    

    //create 4 different surfaces
    surface1=createSprite(10,600,200,50);
    surface1.shapeColor="green";
    surface2=createSprite(250,600,200,50);
    surface2.shapeColor="blue";
    surface3=createSprite(500,600,200,50);
    surface3.shapeColor="purple";
    surface4=createSprite(750,600,200,50);
    surface4.shapeColor="red";



    //create box sprite and give velocity
    box=createSprite(random(20,750),250,20,20);
    box.velocityY=5;
    box.velocityX=3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    




    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="green";
    
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="blue";
        music.playSound();
        }

        if(surface3.isTouching(box) && box.bounceOff(surface3)){
            box.shapeColor="purple";
            
            }

            if(surface4.isTouching(box) && box.bounceOff(surface4)){
                box.shapeColor="red"

                }
            



drawSprites();
}
