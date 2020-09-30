const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
  let amountOfWords = message.split(' ').length; // Write code in this line
  let engravingPrice = amountOfWords * pricePerWord;
  return engravingPrice;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
