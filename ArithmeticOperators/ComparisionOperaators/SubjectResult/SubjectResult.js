function onClickSubjecResults() {
    debugger;
    let telugu = Number(document.getElementById("txtTelugu").value);
    let hindi = Number(document.getElementById("txtHindi").value);
    let english = Number(document.getElementById("txtEnglish").value);
    let maths = Number(document.getElementById("txtMaths").value);
    let science = Number(document.getElementById("txtScience").value);
    let social = Number(document.getElementById("txtSocial").value);
    let result = document.getElementById("pResult");
    if (telugu >= 40 && hindi >= 40 && english >= 40 && maths >= 40 && science >= 40 && social >= 40) {
        result.innerHTML = "🎉 Congratulations! You are Pass!";
        result.style.color = "green";
        result.style.backgroundColor = "#d4edda";
        result.style.border = "2px solid green";
    } else {
        result.innerHTML = "❌ Sorry, You are Fail!";
        result.style.color = "red";
        result.style.backgroundColor = "#f8d7da";
        result.style.border = "2px solid red";
    }
}