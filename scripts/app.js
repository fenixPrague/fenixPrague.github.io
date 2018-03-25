class Calculator {
    constructor(option, value, currency) {
        this.option = option;
        this.value = value;
        this.currency = currency;
    }
}

function getCalcData() {
    const optionsIndex = document.getElementById("options").selectedIndex;
    const option = document.getElementById("options").options[optionsIndex].value;
    let value = document.getElementById("value").value;
    if(value == "") {
        value = 1000;
    }
    const currencyIndex = document.getElementById("currency_options").selectedIndex;
    const currency = document.getElementById("currency_options").options[currencyIndex].text;
    const calcData = new Calculator(option, parseFloat(value), currency);
    return calcData;
}

const calcBtn = document.getElementById('btn_calc');
calcBtn.addEventListener('click', function() {
    const option = getCalcData().option;
    const value = getCalcData().value;
    let currency = getCalcData().currency.split(" ", 3)[0].toLowerCase();
    const raw = document.getElementsByClassName(currency);
    let currencyRate = 0;
    
    if(option.includes("sell")) {
        currencyRate = parseFloat(raw[0].cells[3].innerHTML);
    } else {
        currencyRate = parseFloat(raw[0].cells[2].innerHTML);
    }
    let calculationResult = currencyRate * value;
    showResult(option, value, calculationResult, currency);

}, false);

function showResult(option, value, calcResult, currency) {
    const resultContainer = document.getElementById("calculation_result").style.display = "block";
    const resultOption = document.getElementById("result_show_option");
    const resultValue = document.getElementById("result_show_value").textContent = value;
    const resultCurrency = document.getElementById("result_show_currency").textContent = currency.toUpperCase();
    const lang = checkLanguage();
    displayOptionResult(option, lang, resultOption)
    const resultText = document.getElementById("result_value").textContent = calcResult;
}

function displayOptionResult(option, language, result) {
    if(option.includes("sell")) {
        if(language === "ru") {
            result.textContent = "Продажа";
        } else if (language === "cz") {
            result.textContent = "Prodej";
        } else {
            result.textContent = "Selling";
        }
    } else {
        if(language === "ru") {
            result.textContent = "Покупка";
        } else if (language === "cz") {
            result.textContent = "Nákup";
        } else {
            result.textContent = "Buying";
        }
    }
}

function checkLanguage() {
    if(calcBtn.innerText.includes("Spočítat")) {
        return "cz";
    } else if (calcBtn.innerText.includes("Результат")) {
        return "ru";
    } else {
        return "en";
    }
}

