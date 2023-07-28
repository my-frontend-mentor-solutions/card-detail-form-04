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

    let nameString = nameInput.value.replace(/[^a-zA-Z ]/g, "");
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
        numberInput.value = numberInput.value.substring(0, 5);
        console.log("1");
    }
    if (key === "Backspace" && numberInput.value.length == 10 && numberInput.value.charAt(9) == ' ') {
        numberInput.value = numberInput.value.substring(0, 9);
        console.log("2");

    }
    if (key === "Backspace" && numberInput.value.length == 15 && numberInput.value.charAt(14) == ' ') {
        numberInput.value = numberInput.value.substring(0, 14);
        console.log("3");

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
        expDateInput.value = expDateInput.value.replace('/', '');
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
let checker = false;

let errorChecker = () => {


    if (nameInput.value.trim() == "") {
        showError("name", "This field is required");
        checker = true;
    }
    else {
        removeError("name");
        checker = false;
    }

    if (numberInput.value.trim() == "") {
        showError("number", "This field is required");
        checker = true;
    }
    else if (numberInput.value < 19) {
        showError("number", "Invalid input");
        checker = true;
    }
    else {
        removeError("number");
        checker = false;
    }

    if (expDateInput.value.trim() == "") {
        showError("expdate", "Can't be blank");
        checker = true;
    }
    else if (expDateInput.value < 5) {
        showError("expdate", "Invalid input");
        checker = true;
    }
    else {
        removeError("expdate");
        checker = false;
    }

    if (cvvInput.value.trim() == "") {
        showError("cvv", "Can't be blank");
        checker = true;
    }
    else if (cvvInput.value < 3) {
        showError("cvv", "Invalid input");
        checker = true;
    }
    else {
        removeError("cvv");
        checker = false;
    }
}

let formContainer = document.getElementById("form-container");
let successPageContainer = document.getElementById("success-page-container");

submitButton.addEventListener("click", () => {
    errorChecker();

    if (checker == false) {
        formContainer.style.display = "none";
        successPageContainer.style.display = "flex";
        refreshInput();

        setTimeout(() => {
            formContainer.style.display = "flex";
            successPageContainer.style.display = "none";
        }, 3000)
    }
});