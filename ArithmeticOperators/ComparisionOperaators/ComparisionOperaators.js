function onClickComparisonOperaators(){
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    if(firstNumber ==secondNumber){
        document.getElementById("pResult").innerHTML="True";
       }else{
        document.getElementById("pResult").innerHTML="False"
       }  
}