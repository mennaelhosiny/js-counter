let count=0
function increment(){
    count=count+1
    document.getElementById("h1").innerHTML=count
    document.getElementById("h1").style.color="green"
    

    
}

function reset(){
    count=0
    document.getElementById("h1").innerHTML=count
    document.getElementById("h1").style.color="black"
}
function decrement(){
    count=count-1
    document.getElementById("h1").style.color="red"
    document.getElementById("h1").innerHTML=count
}