let count=0
function increment(){
    count=count+1
    document.getElementById("h1").innerHTML=count
    document.body.style.color="green";
    

    
}

function reset(){
    count=0
    document.getElementById("h1").innerHTML=count
    document.body.style.color="black";
}
function decrement(){
    count=count-1
    document.body.style.color="red";
    document.getElementById("h1").innerHTML=count
}