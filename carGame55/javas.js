const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

startScreen.addEventListener('click', start);

let player ={ speed : 10 , score:0};
let roadVel = 5;
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false}
    document.addEventListener('keydown',keyDown);
    document.addEventListener('keyup',keyUp);

    function keyDown(e){
        e.preventDefault();
        keys[e.key]=true;
        //console.log(keys);
    }

    function keyUp(e){
        e.preventDefault();

        keys[e.key]=false;
        //console.log(keys);
    }
    function Collision(a,b){
        aRect =a.getBoundingClientRect();
        bRect =b.getBoundingClientRect();

        return!((aRect.bottom<bRect.top) || (aRect.top>bRect.bottom) || (aRect.right<bRect.left) ||(aRect.left>bRect.right))
    }
    function moveLines(){
        let lines=document.querySelectorAll('.lines');

        lines.forEach(function(item){
            if(item.y>=650){
                item.y-=700;
            }
            item.y+=roadVel;
            item.style.top=item.y+"px";
        })
    }
    function endGame(){
        
        player.start= false;
        startScreen.classList.remove('hide');
    }
    function moveEnemy(car){
        let enemy=document.querySelectorAll('.enemy');

        enemy.forEach(function(item){
            if(Collision(car,item)){
                console.log("Collide");
               /* let music =document.getElementById("sound");
                music.play();  */
                endGame();
            }
            if(item.y>=650){
                item.y =-200;
                item.style.left=Math.floor(Math.random()*350)+"px";
            }
            item.y+=6;
            item.style.top=item.y+"px";
        })
    }
function gameplay(){
    //console.log("hey");
    //getBoundingClientRect() tells about the position and dimension of the element//
    let road=gameArea.getBoundingClientRect();
    //console.log(road);

    let car=document.querySelector('.car');
    
    if(player.start){
        moveLines();
        moveEnemy(car);
        if(keys.ArrowUp && player.y>200){player.y-=player.speed}
        if(keys.ArrowDown && player.y< 650 ){player.y+=player.speed}
        if(keys.ArrowLeft && player.x>0){player.x-=player.speed}
        if(keys.ArrowRight && player.x< (road.width-70) ){player.x+=player.speed}

        car.style.top = player.y+"px";
        car.style.left = player.x +"px";

    window.requestAnimationFrame(gameplay);
    player.score++;
    score.innerText ="Score :" + player.score;
    }
}
function start(){
    startScreen.classList.add('hide');
    gameArea.innerHTML="";
 /*   let clip=document.getElementById("StartingClip");
    clip.play(); */   

    player.start=true;
    player.score=0;
    window.requestAnimationFrame(gameplay);
    for(x=0; x<7;x++){
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'lines');
        roadLine.y=(x*100);
        roadLine.style.top = roadLine.y+"px";
        gameArea.appendChild(roadLine);
    }

    

    let car =document.createElement('div');
    car.setAttribute('class','car');
    //car.innerText = "yo";//
    gameArea.appendChild(car);

    player.x =car.offsetLeft;
    player.y =car.offsetTop;

    console.log("top position" + car.offsetTop);
    console.log("left position" + car.offsetLeft);
    //let colours =["Yellow","Green","Blue"];
   const imgs= [
    'url(pngfind.com-car-top-view-png-749644.png)',
    'url(pngfind.com-car-top-view-png-750271.png)',
    'url(pngfind.com-car-top-view-png-1683799.png)',
    'url(ene1.png)',
    'url(ene2.png)',
    'url(ene4.png)',
    
        
    ]  
    

    for(x=0; x<4;x++){
        let enemyCar = document.createElement('div');
        let z =imgs[Math.floor(Math.random()*imgs.length)];
        enemyCar.setAttribute('class', 'enemy');
        enemyCar.y=((x+1)*500)*-1;
        enemyCar.style.top = enemyCar.y+"px";  
       enemyCar.style.backgroundImage=z;
        enemyCar.style.left=Math.floor(Math.random()*350)+"px";
        gameArea.appendChild(enemyCar);
    }
}