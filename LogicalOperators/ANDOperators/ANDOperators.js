var age = 15;
var gender = "male";
function onClickANDOperator(){
    debugger;
    let inputAge = Number(document.getElementById("txtAge").value);
    let inputGender = document.querySelector('input[name="gender"]:checked').value;
    if((age == inputAge) && (gender == inputGender)){
        document.getElementById("pResult").innerHTML = "True";
        document.getElementById("pResult").style.color = "green";
        document.getElementById("pResult").style.fontSize = "30px";
        document.getElementById("pResult").style.fontWeight = "bold";
    } else {
        document.getElementById("pResult").innerHTML = "False";
        document.getElementById("pResult").style.color = "red";
        document.getElementById("pResult").style.fontSize = "30px";
        document.getElementById("pResult").style.fontWeight = "bold";
    }
}