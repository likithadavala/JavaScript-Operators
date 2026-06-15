let purchaseAmount = "5000";
let isPremiumMember = "true";
function onClickFestivalOfferEligibility() {
    debugger;
    let purchase = document.getElementById("txtPurchase").value;
    let premiumMember = document.getElementById("txtPremiumMember").value;
    if ((purchase == purchaseAmount) || (premiumMember == isPremiumMember)) {
        document.getElementById("PEligibility").innerHTML = "Discount Applied";
    } else {
        document.getElementById("PEligibility").innerHTML = "No , Dicount was not applied";
    }
}