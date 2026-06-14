function onClickLoginStatus(){
    let status = document.getElementById("txtLoginStatus").value;
    let result = document.getElementById("pLoginStatus");
    let logIn = (status =="false");
    if(!logIn){
        result .innerHTML = "Welcome, Thankyou! for Login";
    }else{
        result.innerHTML = "please LogIn First";
    }
}