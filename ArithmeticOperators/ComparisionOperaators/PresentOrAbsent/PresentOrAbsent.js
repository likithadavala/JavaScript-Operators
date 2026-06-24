function onClickAttendances(){
    debugger;
    let name = document.getElementById("txtName").value.toLowerCase();
    let isPresent = document.querySelector('input[name="isPresent"]:checked');
    if(isPresent.value === "True"){
        document.getElementById("pResult").innerHTML=`${name}  is Present Today`;
    } else {
        document.getElementById("pResult").innerHTML=`${name}  is Absent Today`;
    }
}