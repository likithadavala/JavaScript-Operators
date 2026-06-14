function onClickOROperator(){
    debugger;
    let isTeacher = document.getElementById("txtTeacher").value.toUpperCase();
    let isAdmin = document.getElementById("txtAdmin").value.toUpperCase();
    if((isTeacher =="TRUE") || (isAdmin == "TRUE")){
        document.getElementById("pResult").innerHTML = "Access Granted";
    }else{
         document.getElementById("pResult").innerHTML = "Access Denied";
    }
}