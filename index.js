let nameInput = document.getElementById("name-input");
let numberInput = document.getElementById("number-input");
let expMonthInput = document.getElementById("expmonth-input");
let expYearInput = document.getElementById("expyear-input");
let cvvInput = document.getElementById("cvv-input");

let cardName = document.getElementById("card-holder-name");
let cardNumber = document.getElementById("card-number");
let cardExpMonth = document.getElementById("exp-month");
let cardExpYear = document.getElementById("exp-year");
let cardCvv = document.getElementById("card-cvv");



nameInput.addEventListener("input", () => {
    cardName.innerText = nameInput.value;
})

numberInput.addEventListener("input", () => {
    numberInput.value = numberInput.value.slice(0, 16);
    cardNumber.innerText = numberInput.value;

});
expMonthInput.addEventListener("input", () => {
    expMonthInput.value = expMonthInput.value.slice(0, 2);
    cardExpMonth.innerHTML = expMonthInput.value;
});
expYearInput.addEventListener("input", () => {
    expYearInput.value = expYearInput.value.slice(0, 2);
    cardExpYear.innerText = expYearInput.value;
});
cvvInput.addEventListener("input", () => {
    cvvInput.value = cvvInput.value.slice(0, 3);
    cardCvv.innerText = cvvInput.value;
});

let showError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--red)";
    document.querySelector("#" + errorElement + "-input").style.borderColor = "var(--red)";
    document.querySelector("#" + errorElement + "-error").innerText = errorMessege;
}

let hideError = (errorElement) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--very-dark-violet)";
    document.querySelector("#" + errorElement + "-input").style.borderColor = "var(--voilet)";
    document.querySelector("#" + errorElement + "-error").innerText = "";
}