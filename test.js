const {fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app");
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar,fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 153.48", function(){
    const yens = fromDollarToYen(1);
    expect(fromDollarToYen(1)).toBe(153.48);
});
test("One Yen should be 123", function(){
    const pound = fromYenToPound(1);
    expect(fromYenToPound(1)).toBe(123);
});
    
    