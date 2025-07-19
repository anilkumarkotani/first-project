document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.querySelector("button");

    calculateButton.addEventListener("click", function () {
        const billAmount = parseFloat(document.getElementById("bill amount").value);
        const tipPercentage = parseFloat(document.getElementById("tip percentage").value);

        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            alert("Please enter valid numbers for bill and tip percentage.");
            return;
        }

        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;

        document.getElementById("tip amount").value = tipAmount.toFixed(2);
        document.getElementById("total").value = totalAmount.toFixed(2);
    });
});