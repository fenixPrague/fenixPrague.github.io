const browserLanguage = window.navigator.language;

//LANGUAGE BUTTONS
const ruButton = document.getElementById("ru");
const czButton = document.getElementById("cz");
const enButton = document.getElementById("en");

//HEADER TEXT
const rateButton = document.getElementsByTagName("li")[3].firstChild;
const aboutButton = document.getElementsByTagName("li")[4].firstChild;
const headerText = document.getElementsByTagName("h3")[0];
const zeroCommission = document.getElementById("zero");
const contactUsBtn = document.getElementsByClassName("btn")[0];

//BIG TABLE
const bigTable = document.getElementById("ratetable_big");
const simpleTableText = bigTable.children[0].children[0].children[0];
const vipTableText = bigTable.children[0].children[0].children[1];
const currencyLabel = bigTable.children[1].children[0].children[0];
const buyLabel = bigTable.children[1].children[0].children[1];
const sellLabel = bigTable.children[1].children[0].children[2];
const buyVipLabel = bigTable.children[1].children[0].children[3];
const sellVipLabel = bigTable.children[1].children[0].children[4];

//SMALL TABLE SIMPLE
const simpleTable = document.getElementById("ratetable");
const simpleTableCz = document.getElementById("ratetable_cz");

//SMALL TABLE VIP
const vipTable = document.getElementById("ratetable_vip");
const vipTableCz = document.getElementById("ratetable_vip_cz");

//TABLE INFO
const tableInfoCz = document.getElementById("info_cz");
const tableInfoRu = document.getElementById("info_ru");
const tableInfoEn = document.getElementById("info_en");

//CALCULATOR
const calculator = document.getElementsByClassName("calculator")[0];
const calcHeaderText = calculator.children[0];
const options = document.getElementById("options");
const sellOption = options.children[0];
const buyOption = options.children[1];
const calcAmountLabel = document.getElementsByTagName("label")[0];
const calcCurrencyLabel = document.getElementsByTagName("label")[1];
const calcButton = document.getElementById("btn_calc");

//ADDRESS and CONTACT
function changeContactsInfoLanguage(contactsText, addressText) {
    const contacts = document.getElementsByClassName("contacts_info")[0].children[0].children[0];
    const address = document.getElementsByClassName("contacts_info")[0].children[1].children[0];

    contacts.textContent = contactsText;
    address.textContent = addressText;
}


class Header {
    constructor(rateButton, aboutButton, headerText,
        zeroCommission, contactUsBtn) {
            this.rateButton = rateButton;
            this.aboutButton = aboutButton;
            this.headerText = headerText;
            this.zeroCommission = zeroCommission;
            this.contactUsBtn = contactUsBtn;
    }
    changeLanguage(rateButton, aboutButton, headerText,
        zeroCommission, contactUsBtn) {
        this.rateButton.textContent = rateButton;
        this.aboutButton.textContent = aboutButton;
        this.headerText.textContent = headerText;
        this.zeroCommission.textContent = zeroCommission;
        this.contactUsBtn.textContent= contactUsBtn;
    }
}

class Table {
    constructor(simpleTableText, vipTableText, currencyLabel, buyLabel,
         sellLabel, buyVipLabel, sellVipLabel) {
            this.simpleTableText = simpleTableText;
            this.vipTableText = vipTableText;
            this.currencyLabel = currencyLabel;
            this.buyLabel = buyLabel;
            this.sellLabel = sellLabel;
            this.buyVipLabel = buyVipLabel;
            this.sellVipLabel = sellVipLabel;
    }

    changeLanguage(simpleTableText, vipTableText, currencyLabel, buyLabel,
        sellLabel, buyVipLabel, sellVipLabel) {
            this.simpleTableText.textContent = simpleTableText;
            this.vipTableText.textContent = vipTableText;
            this.currencyLabel.textContent = currencyLabel;
            this.buyLabel.textContent = buyLabel;
            this.sellLabel.textContent = sellLabel;
            this.buyVipLabel.textContent = buyVipLabel;
            this.sellVipLabel.textContent = sellVipLabel;
    }
    
    hideTables(bigTableValue,simpleTableValue,vipTableValue,
        simpleTableCzValue,vipTableCzValue) {
        bigTable.style.display = bigTableValue;
        simpleTable.style.display = simpleTableValue;
        vipTable.style.display = vipTableValue;
        simpleTableCz.style.display = simpleTableCzValue;
        vipTableCz.style.display = vipTableCzValue;
    }
}

function changeCalculatorLanguage(headerText, sellOptionText, buyOptionText,
    amountLabelText, currencyLabelText, calcBtnText) {
    calcHeaderText.textContent = headerText;
    sellOption.textContent = sellOptionText;
    buyOption.textContent = buyOptionText;
    calcAmountLabel.textContent = amountLabelText;
    calcCurrencyLabel.textContent = currencyLabelText;
    calcButton.textContent = calcBtnText;
}

if(browserLanguage === "ru") {
    useLanguageRu();
} else if(browserLanguage == "cz") {
    useLanguageCz();
} else {
    useLanguageEn();
}


ruButton.addEventListener("click", () => {
    useLanguageRu();
    removeClass(czButton, "active");
    removeClass(enButton, "active");
});


czButton.addEventListener("click", function() {
    useLanguageCz();
    removeClass(ruButton, "active");
    removeClass(enButton, "active");
});

enButton.addEventListener("click", () => {
    useLanguageEn();
    removeClass(ruButton, "active");
    removeClass(czButton, "active");
});




function useLanguageRu() {
    const button = document.getElementById("ru");

    //Header
    const headerRu = new Header(rateButton, aboutButton, headerText,
         zeroCommission, contactUsBtn);
    headerRu.changeLanguage("Курсы", "Контакты", "Лучший обменник в Праге",
        "0% комиссии", "свяжитесь с нами");
    
    //Table
    const table = new Table(simpleTableText,vipTableText,currencyLabel,
        buyLabel,sellLabel,buyVipLabel,sellVipLabel);

    if(screen.width < 800) {
        table.hideTables("none","table","table","none","none");
    } else {
        table.hideTables("table","none","none","none","none");

        table.changeLanguage("Текущие курсы","VIP - курсы","Валюта",
            "Покупка","Продажа","Покупка","Продажа");
    }

    //Calculator
    changeCalculatorLanguage("Калькулятор","Я хочу продать",
    "Я хочу купить","Сумма","Валюта","Результат");

    changeContactsInfoLanguage("Контактные данные", "Адрес");


    //TABLE INFo
    tableInfoRu.style.display = "block";
    tableInfoCz.style.display = "none";
    tableInfoEn.style.display = "none";

    addClass(button, "active");

}

function useLanguageCz() {
    const button = document.getElementById("cz");

    //Header
    const headerCz = new Header(rateButton, aboutButton, headerText,
        zeroCommission, contactUsBtn);
    headerCz.changeLanguage("Kurzy", "Kontakt", "Nejlepší smenarna v Praze",
        "0% poplatku", "Kontaktujte nás");

    //Table
    const table = new Table(simpleTableText,vipTableText,currencyLabel,
        buyLabel,sellLabel,buyVipLabel,sellVipLabel);

    if(screen.width < 800) {
        table.hideTables("none", "none", "none", "table", "table");
    } else {
        table.hideTables("table", "none", "none", "none", "none");
        table.changeLanguage("Kurzy","VIP - kurzy","Měna",
            "Nákup","Prodej","Nákup","Prodej");
    }

    //Calculator
    changeCalculatorLanguage("Kalkulačka","Chci prodat",
    "Chci koupit","Částka","Měna","Spočítat");

    changeContactsInfoLanguage("Kontaktní údaje", "Adresa");

    //TABLE INFo
    tableInfoCz.style.display = "block";
    tableInfoRu.style.display = "none";
    tableInfoEn.style.display = "none";

    addClass(button, "active");
}

function useLanguageEn() {
    const button = document.getElementById("en");

    //Header
    const headerRu = new Header(rateButton, aboutButton, headerText,
        zeroCommission, contactUsBtn);
    headerRu.changeLanguage("Rates", "Contact", "The best exchange in Prague",
        "0% comission", "Contact Us Now");

    //Table
    const table = new Table(simpleTableText,vipTableText,currencyLabel,
        buyLabel,sellLabel,buyVipLabel,sellVipLabel);
        table.hideTables("table", "none", "none", "none", "none");
        table.changeLanguage("Current rates","VIP - rates","Currency",
        "Buy","Sell","Buy","Sell");

    //Calculator
    changeCalculatorLanguage("Calculator","I want to sell",
    "I want to buy","Amount","Currency","Calculate");

    changeContactsInfoLanguage("Contact details", "Address");

    //TABLE INFo
    tableInfoRu.style.display = "none"
    tableInfoCz.style.display = "none";
    tableInfoEn.style.display = "block";

    addClass(button, "active");
}


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}
