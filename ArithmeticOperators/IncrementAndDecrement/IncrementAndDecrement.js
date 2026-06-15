let count ="0";
function onClickToIncrement(){
    debugger;
    count++;
    document.getElementById("pResult").innerHTML = count;
}

function onClickToDecrement(){
    debugger;
    if(count > 0){
    count--;
    document.getElementById("pResult").innerHTML = count;
    }
}