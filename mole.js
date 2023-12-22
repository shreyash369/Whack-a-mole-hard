let currMoletile;
let currPlanttile;
let currPlanttile2;
let score=0;
let GameOver=false;

window.onload = function(){
    setGame();
}

function setGame() {
    for(let i = 0 ; i < 9 ; i++ ) {
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile); 
    }
    setInterval(setMole,1000);
    setInterval(setPlant,1000);
}

function getRandomtile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(GameOver) return;
    if(currMoletile){
        currMoletile.innerHTML="";
    }

    let mole=document.createElement("img");
    mole.src="./monty-mole.png";

    let num=getRandomtile();
    if(currPlanttile && currPlanttile.id==num){
        num=(num+1)%9;
    }
    if(currPlanttile2 && currPlanttile2.id==num){
        num=(num+1)%9;
    }
    currMoletile=document.getElementById(num);
    currMoletile.appendChild(mole);

}

function setPlant(){
    if(GameOver) return;
    if(currPlanttile){
        currPlanttile.innerHTML="";
    }
    if(currPlanttile2){
        currPlanttile2.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";
    
    let planttwo=document.createElement("img");
    planttwo.src="./piranha-plant.png";
    let num=getRandomtile();
    let numtwo=getRandomtile();
    if(currMoletile && currMoletile.id==num){
        num=(num+1)%9;
    }
    if(currMoletile && currMoletile.id==numtwo){
        numtwo=(numtwo+2)%9;
    }
    if(currPlanttile && currPlanttile2 && num==numtwo){
        numtwo=(numtwo+1)%9;
        if(numtwo==currMoletile.id){
            numtwo=(numtwo+1)%9;
        }
    }
    currPlanttile=document.getElementById(num);
    currPlanttile.appendChild(plant);
    currPlanttile2=document.getElementById(numtwo);
    currPlanttile2.appendChild(planttwo);
}

function selectTile(){
    if(GameOver) return;
    if(this==currMoletile){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }else if(this==currPlanttile){
        document.getElementById("score").innerText="GAME OVER: "+score.toString();
        GameOver=true;
    }
}