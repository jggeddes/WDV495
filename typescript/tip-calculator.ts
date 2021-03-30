function calculateTip() {

    let billAmount:any;
    let tipPercentage:any;

    billAmount = (<HTMLInputElement>document.querySelector("#total-bill")).value;
    tipPercentage = (<HTMLSelectElement>document.querySelector("#tip-percentage")).value;

    let tipToPay:number;
    let finalBill:number;

    if (typeof billAmount == "string") {
        billAmount = parseFloat(billAmount);
    }

    if (typeof tipPercentage == "string") {
        tipPercentage = parseFloat(tipPercentage);
    }

    tipToPay = billAmount * tipPercentage;
    finalBill = billAmount + tipToPay;

    (<HTMLSpanElement>document.querySelector("#tip-display")).innerHTML = tipToPay.toFixed(2);
    (<HTMLSpanElement>document.querySelector("#total-bill-display")).innerHTML = finalBill.toFixed(2);
}

(<HTMLInputElement>document.querySelector("#calculate")).addEventListener('click', calculateTip);