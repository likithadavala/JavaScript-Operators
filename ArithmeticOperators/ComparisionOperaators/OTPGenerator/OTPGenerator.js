var OTP = 0;
function onClickSendOTP() {
    debugger;
   
    OTP = Math.trunc(Math.random() * 10 ** 6);
    console.log(OTP);
    alert(OTP);
}
function onClickAuthentication() {
    debugger;
    let inputOTP = document.getElementById("txtInputOTP").value;
    if (inputOTP == OTP) {
        document.getElementById("pAuthentication").innerHTML = "Successfully LogIn";
        document.getElementById("pAuthentication").style.color = "Green"
        document.getElementById("pAuthentication").style.padding = "30px";
        document.getElementById("pAuthentication").style.borderRadius = "10px";
        document.getElementById("pAuthentication").style.boxShadow =
            "0px 4px 10px rgba(0,0,0,0.2)";
        document.getElementById("pAuthentication").style.textAlign = "center";
    } else {
        document.getElementById("pAuthentication").innerHTML = "Invalid OTP";
        document.getElementById("pAuthentication").style.color = "Red"
        document.getElementById("pAuthentication").style.padding = "30px";
        document.getElementById("pAuthentication").style.borderRadius = "10px";
        document.getElementById("pAuthentication").style.boxShadow =
            "0px 4px 10px rgba(0,0,0,0.2)";
        document.getElementById("pAuthentication").style.textAlign = "center";
    }
}