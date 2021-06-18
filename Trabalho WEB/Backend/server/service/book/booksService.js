const booksData = require('../../data/book/booksData');

exports.getCarros = function() {
    return booksData.getCarros();
}


exports.getCarro = function(carroID) {
    return booksData.getCarro(carroID);
}

exports.deleteCarro = function(carroID) {
    return booksData.deleteCarro(carroID);
}

exports.saveCarro = function (carro) {
    return booksData.saveCarro(carro);
}


