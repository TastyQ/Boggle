var vardi=["CABLE", "DADDY", "EARLY", "EAGLE", "TABLE", "MOUSE", "HABIT"];
function randomWord(){
    let i=1;
    return vardi[i];
}
function randomWord(v1, v2, v3, v4, v5){
    let randomPairs=[];
    for(let i=0; i<25; i++){
        let nr=Math.floor(Math.random()*100);
        randomPairs[i]={"index":i, "random":nr};
    }
    randomPairs.sort(function(a,b){return a.random-b.random});
    let sajaukts="";
    for(let i=0; i<25; i++){
        sajaukts+=v1.charAt(randomPairs[i]["index"]);
    }
}
