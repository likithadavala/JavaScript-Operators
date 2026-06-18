function onClickSubmit() {
    debugger;
    let courseFee = Number(document.getElementById("txtCourseFee").value);
    let coupon = document.getElementById("txtCoupon").value;
    let result = document.getElementById("pDiscount");
    if(coupon == "MEDSQUIRE10" || coupon == "MEDSQUIRE20"){
        if(coupon == "MEDSQUIRE10"){
            courseFee *= .9;
        }if(coupon == "MEDSQUIRE20"){
            courseFee *= .8;
        } 
        result.innerHTML =" 🤩 Successfully Valid Coupon! Amount is Rs." + courseFee;
        result.style.color = "green";
    }else{
        result.innerHTML = " 😓 Invalid Coupon! Amount is RS." + courseFee;
        result.style.color = "red";
    }
}