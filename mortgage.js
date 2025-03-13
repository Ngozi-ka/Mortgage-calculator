document.addEventListener("DOMContentLoaded", function(){

    const mortgageForm = document.querySelector(".mortgage-form");
    const mortgageAmount = document.querySelector(".mortgage-amount");
    const mortgageTerm = document.querySelector(".mortgage-term");
    const mortgageRate = document.querySelector(".mortgage-rate");
    const monthlyAmount = document.querySelector(".monthly-amount");
    const totalAmount = document.querySelector(".total-amount");
    const clearAll = document.querySelector("#clearAll");

mortgageForm.addEventListener("submit", function(e){
    e.preventDefault();

    const loanAmount = parseFloat(mortgageAmount.value);
    const loanTermMonths = parseFloat(mortgageTerm.value) * 12;
    const monthlyRate = parseFloat(mortgageRate.value) /100 / 12;

    const selected = document.querySelector(`input[name="type"]:checked`);
    const mortgageType = selected ? selected.value:"";

    let monthlyPayment, totalPayment;

    if (mortgageType == "repayment"){
        const factor = Math.pow(1 + monthlyRate, loanTermMonths);
        monthlyPayment = loanAmount * (monthlyRate * factor) / (factor -1);
        totalPayment = monthlyPayment * loanTermMonths;
    } else{
        monthlyPayment = loanAmount * monthlyRate;
        totalPayment = monthlyPayment * loanTermMonths;
    }

    monthlyAmount.textContent = `$${monthlyPayment.toFixed(2)}`;
    totalAmount.textContent = `$${totalPayment.toFixed(2)}`;


});

clearAll.addEventListener("click", function(){
    mortgageForm.reset();
    monthlyAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
});

});