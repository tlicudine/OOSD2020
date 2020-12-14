const usDollar = 0.77;
const britPound = .58;

function roundTwo(amount) {
    return Math.round(amount * 100) / 100;
}

exports.CADtoUSD = can => roundTwo(can * usDollar);
exports.USDtoCAD = us => roundTwo(us / usDollar);
exports.CADtoGBP = can => roundTwo(can * britPound);
exports.GBPtoCAD = brit => roundTwo(brit / britPound);