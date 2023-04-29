var ator,ator1,carro11,carro22,carro33,carro44,carro55,carro66,carro1,carro2,carro3,carro4,carro5,carro6,estrada

function preload(){
  estrada = loadImage("imagens/estrada.png") 
  ator1 = loadImage('imagens/ator-1.png')
  carro11 = loadImage('imagens/carro-3.png')
  carro22 = loadImage('imagens/carro-1.png')
  carro33 = loadImage('imagens/carro-2.png')
  carro44 = loadImage('imagens/carro-2.png')
  carro55 = loadImage('imagens/carro-1.png')
  carro66 = loadImage('imagens/carro-3.png')
}
function setup(){
  createCanvas(600,350)



ator=createSprite(300,336)
ator.addImage(ator1)
ator.scale=0.2

carro1 = createSprite(599,295)
carro1.addImage(carro11)
carro1.scale=0.51
carro1.velocityX=-4.4

carro2 = createSprite(599,195)
carro2.addImage(carro22)
  carro2.scale=0.53
carro2.velocityX = -5.3

carro3=createSprite(599,248)
carro3.addImage(carro33)
  carro3.scale=0.58
  carro3.velocityX = -3.5

carro4 = createSprite(599,150)
  carro4.addImage(carro44)
  carro4.scale=0.56
  carro4.velocityX = -3.9

carro5= createSprite(599,101)
  carro5.addImage(carro55)
  carro5.scale=0.54
  carro5.velocityX = -4.5

carro6 = createSprite(599,55)
carro6.addImage(carro66)
  carro6.scale=0.52
  carro6.velocityX = -4.3
}

function draw(){
background(estrada)

if(keyDown("D")){
ator.velocityX=+3
}
if(keyDown("A")){
ator.velocityX=-3
}
if(keyDown("W")){
ator.velocityY=-3
}
if(keyDown("S")){
ator.velocityY=+3
}
if(ator.y<0.1){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(ator.x<0.1){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(ator.x>599){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(ator.y>349){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}

if(carro1.x<1){
carro1.x=599
carro1.y=random(300,50)
carro1.velocityX=random(-7,-4)
carro1.scale=random(0.599,0.5)
}
if(carro2.x<0.1){
carro2.x=599
carro2.y=random(300,50)
carro2.velocityX=random(-7,-4)
carro2.scale=random(0.6,0.5)
}
if(carro3.x<0.1){
carro3.x=599
carro3.y=random(300,50)
carro3.velocityX=random(-7,-4)
carro3.scale=random(0.6,0.5)
}
if(carro4.x<0.1){
carro4.x=599
carro4.y=random(300,50)
carro4.velocityX=random(-7,-4)
carro4.scale=random(0.6,0.5)
}
if(carro5.x<0.1){
carro5.x=600
carro5.y=random(300,50)
carro5.velocityX=random(-7,-4)
carro5.scale=random(0.6,0.5)
}
if(carro6.x<0.1){
carro6.x=600
carro6.y=random(300,50)
carro6.velocityX=random(-7,-4)
carro6.scale=random(0.6,0.5)
}

if(carro1.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(carro2.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(carro3.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(carro4.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(carro5.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}
if(carro6.isTouching(ator)){
ator.x=300
ator.y=336
ator.velocityX=0
ator.velocityY=0
}

carro1.collide(carro2)
carro1.collide(carro3)
carro1.collide(carro4)
carro1.collide(carro5)
carro1.collide(carro6)

carro2.collide(carro1)
carro2.collide(carro3)
carro2.collide(carro4)
carro2.collide(carro5)
carro2.collide(carro6)

carro3.collide(carro1)
carro3.collide(carro2)
carro3.collide(carro4)
carro3.collide(carro5)
carro3.collide(carro6)

carro4.collide(carro2)
carro4.collide(carro3)
carro4.collide(carro1)
carro4.collide(carro5)
carro4.collide(carro6)

carro5.collide(carro1)
carro5.collide(carro3)
carro5.collide(carro4)
carro5.collide(carro2)
carro5.collide(carro6)

carro6.collide(carro1)
carro6.collide(carro2)
carro6.collide(carro4)
carro6.collide(carro5)
carro6.collide(carro3)


drawSprites()
}