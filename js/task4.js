const formatString = function (string, maxLength = 40) {
  // Write code under this line
  let newString = '';
  if (string.length <= maxLength) {
    newString = string;
  } else if (string.length > maxLength) {
    const cutString = string.slice(0, maxLength);
    newString = `${cutString}...`;
  }
  return newString;
};

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
