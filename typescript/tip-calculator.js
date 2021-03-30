function calculateTip() {
    var billAmount;
    var tipPercentage;
    billAmount = document.querySelector("#total-bill").value;
    tipPercentage = document.querySelector("#tip-percentage").value;
    var tipToPay;
    var finalBill;
    if (typeof billAmount == "string") {
        billAmount = parseFloat(billAmount);
    }
    if (typeof tipPercentage == "string") {
        tipPercentage = parseFloat(tipPercentage);
    }
    tipToPay = billAmount * tipPercentage;
    finalBill = billAmount + tipToPay;
    document.querySelector("#tip-display").innerHTML = tipToPay.toFixed(2);
    document.querySelector("#total-bill-display").innerHTML = finalBill.toFixed(2);
}
document.querySelector("#calculate").addEventListener('click', calculateTip);
