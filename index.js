let nameInput = document.getElementById("name-input");
let numberInput = document.getElementById("number-input");
let expDateInput = document.getElementById("expdate-input");
let cvvInput = document.getElementById("cvv-input");

let cardName = document.getElementById("card-holder-name");
let cardNumber = document.getElementById("card-number");
let cardExpDate = document.getElementById("card-validity");
let cardCvv = document.getElementById("card-cvv");

let submitButton = document.getElementById("submit-button");

nameInput.addEventListener("input", () => {

    let nameString = nameInput.value.replace(/[^a-zA-Z]/g, "");
    nameInput.value = nameString;

    cardName.innerText = nameInput.value;
})

numberInput.addEventListener("input", () => {

    let numberString = numberInput.value.replace(/[^\d ]/g, "");
    numberInput.value = numberString;

    if (numberString.length == 4 || numberString.length == 9 || numberString.length == 14) {
        numberInput.value += ' ';
    }

    cardNumber.innerText = numberInput.value;
});

numberInput.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Backspace" && numberInput.value.length == 5 && numberInput.value.charAt(4) == ' ') {
        numberInput.value = numberInput.value.substring(0, 4);
    }
    if (key === "Backspace" && numberInput.value.length == 10 && numberInput.value.charAt(9) == ' ') {
        numberInput.value = numberInput.value.substring(0, 9);
    }
    if (key === "Backspace" && numberInput.value.length == 15 && numberInput.value.charAt(14) == ' ') {
        numberInput.value = numberInput.value.substring(0, 14);
    }
});

expDateInput.addEventListener("input", () => {

    let dateString = expDateInput.value.replace(/[^\d/]/g, "");
    expDateInput.value = dateString;


    if (dateString.length == 2) {
        expDateInput.value = dateString + '/';
    }

    cardExpDate.innerText = expDateInput.value;
});

expDateInput.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Backspace" && expDateInput.value.length == 3 && expDateInput.value.charAt(2) == '/') {
        expDateInput.value = expDateInput.value.substring(0, 2);
    }
});


cvvInput.addEventListener("input", () => {
    cvvInput.value = cvvInput.value.slice(0, 3);
    cardCvv.innerText = cvvInput.value;
})

let showError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--red)";
    document.querySelector("#" + errorElement + "-input").style.borderColor = "var(--red)";
    document.querySelector("#" + errorElement + "-error").innerText = errorMessege;
}

let removeError = (errorElement) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--very-dark-violet)";
    document.querySelector("#" + errorElement + "-input").style.borderColor = "var(--light-grayish-violet)";
    document.querySelector("#" + errorElement + "-error").innerText = "";
}

let refreshInput = () => {
    nameInput.value = "";
    numberInput.value = "";
    expDateInput.value = "";
    cvvInput.value = "";
}


let formContainer = document.getElementById("form-container");
let successPageContainer = document.getElementById("success-page-container");

submitButton.addEventListener("click", () => {

    let isError = false;

    if (!validateInput(inputType.CARD_HOLDER_NAME)) isError = true;
    if (!validateInput(inputType.CARD_NUMBER)) isError = true;
    if (!validateInput(inputType.EXP_DATE)) isError = true;
    if (!validateInput(inputType.CVV)) isError = true;

    if (isError) return;

    formContainer.style.display = "none";
    successPageContainer.style.display = "flex";
    refreshInput();
    setTimeout(() => {
        formContainer.style.display = "flex";
        successPageContainer.style.display = "none";
    }, 3000);

});

const inputType = {
    CARD_HOLDER_NAME: "CARD_HOLDER_NAME",
    CARD_NUMBER: "CARD_NUMBER",
    EXP_DATE: "EXP_DATE",
    CVV: "CVV"
};
const inputMinLength = {
    CARD_HOLDER_NAME: 3,
    CARD_NUMBER: 19,
    EXP_DATE: 5,
    CVV: 3
};
const inputMaxLength = {
    CARD_HOLDER_NAME: 50,
    CARD_NUMBER: 19,
    EXP_DATE: 5,
    CVV: 3
};
const inputElementMapping = {
    CARD_HOLDER_NAME: "name",
    CARD_NUMBER: "number",
    EXP_DATE: "expdate",
    CVV: "cvv"
};

const validateInput = (inputType) => {
    const inputBaseId = inputElementMapping[inputType];
    const inputElement = document.getElementById(inputBaseId + "-input");

    if (inputElement.value.trim() == "") {
        showError(inputBaseId, "Required!");
        return false;
    }
    else if (inputElement.value.length < inputMinLength[inputType] ||
        inputElement.value.length > inputMaxLength[inputType]) {
        showError(inputBaseId, "Invalid input");
        return false;
    }
    removeError(inputBaseId);
    return true;
}