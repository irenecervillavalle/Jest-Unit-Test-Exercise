// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//1 EUR (Euro) = 1.2 USD (US Dollar)

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(euro) {
    let valueInYen = fromEuroToDollar(euro) * 127.9
    return valueInYen
};
const fromYenToPound = function(dollar) {
    let valueInPound = fromDollarToYen(dollar) * 0.8
    return Math.round(valueInPound)
};
module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound}