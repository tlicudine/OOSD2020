const currency = require("./currency");

console.log(`50 Canadian dollars equals ${currency.CADtoUSD(50)} US dollars.`);
console.log(`50 US dollars equals ${currency.USDtoCAD(50)} Canadian dollars.`);
console.log(`50 Canadian dollars equals ${currency.CADtoGBP(50)} British pound sterling.`);
console.log(`50 British pound sterling equals ${currency.GBPtoCAD(50)} Canadian dollars.`);