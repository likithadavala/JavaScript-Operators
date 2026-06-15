let degree = "Btech";
let percentage = "60";
function onClickJobApplication(){
    debugger;
    let inputDegree = document.getElementById("txtDegree").value;
    let inputPercentage =Number(document.getElementById("txtPercentage").value);
    if((degree == inputDegree) && (percentage == inputPercentage)){
        document.getElementById("pJobApplication").innerHTML ="Candidate is eligible for the job."
        document.getElementById("pJobApplication").className ="success";
    }else{
        document.getElementById("pJobApplication").innerHTML ="Candidate is not eligible for the job."
         document.getElementById("pJobApplication").className = "error";
    }
 }