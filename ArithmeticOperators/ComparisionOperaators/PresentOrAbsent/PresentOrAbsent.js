function onClickAttendances(){
    debugger;
    let name = document.getElementById("txtName").value.toLowerCase();
    let isPresent = Number(document.querySelector('input[name="isPresent"]:checked').value);
    console.log(name)
    console.log(typeof name)
    console.log(isPresent)
    console.log(typeof isPresent)
    console.log(isPresent != false)
    if(isPresent != false){
        document.getElementById("pResult").innerHTML=`${name}  is Present Today`;
    } else {
        document.getElementById("pResult").innerHTML=`${name}  is Absent Today`;
    }
}