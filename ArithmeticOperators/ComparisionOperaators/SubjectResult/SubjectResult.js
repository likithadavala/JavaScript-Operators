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
        if (telugu < 40) {
            document.getElementById("pTelugu").innerHTML = " Your failed in Telugu Subject"
            document.getElementById("pTelugu").style.color = "red";
            document.getElementById("pTelugu").style.backgroundColor = "#f8d7da";
        }
        if (hindi < 40) {
            document.getElementById("pHindi").innerHTML = " Your failed in Hindi Subject"
            document.getElementById("pHindi").style.color = "red";
            document.getElementById("pHindi").style.backgroundColor = "#f8d7da";
        }
        if (english < 40) {
            document.getElementById("pEnglish").innerHTML = "Your failed in English Subject"
            document.getElementById("pEnglish").style.color = "red";
            document.getElementById("pEnglish").style.backgroundColor = "#f8d7da";
        }
        if (maths < 40) {
            document.getElementById("pMaths").innerHTML = "Your failed in Maths Subject"
            document.getElementById("pMaths").style.color = "red";
            document.getElementById("pMaths").style.backgroundColor = "#f8d7da";
        }
        if (science < 40) {
            document.getElementById("pScience").innerHTML = "Your failed in Science Subject"
            document.getElementById("pScience").style.color = "red";
            document.getElementById("pScience").style.backgroundColor = "#f8d7da";
         
        }
        if (social < 40) {
            document.getElementById("pSocial").innerHTML = "Your failed in Social Subject"
            document.getElementById("pSocial").style.color = "red";
            document.getElementById("pSocial").style.backgroundColor = "#f8d7da";
           
        }
        result.innerHTML = "❌ Sorry, You are Fail!";
        result.style.color = "red";
        result.style.backgroundColor = "#f8d7da";
        result.style.border = "2px solid red";
    }
    let total = document.getElementById("pTotal");
    total.innerHTML = `Total Marks : ${telugu + hindi + english + maths + science + social} out of 450`
    let average = document.getElementById("pAverage");
    let averageMarks = (telugu + hindi + english + maths + science + social) / 6;
    average.innerHTML = `Average Marks : ${averageMarks}`;
    let percentage = document.getElementById("pPercentage");
    let percentageMarks = (telugu + hindi + english + maths + science + social) / 450 * 100
    percentage.innerHTML = `Percentage : ${percentageMarks}`;
}
