'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbersArray = [];
  let processedString = str;
  while (processedString.length) {
    let foundedNumber = !isNaN(parseFloat(processedString)) && processedString.charAt(0) !== " "  ? parseFloat(processedString) : '';
    let substingLength = !!foundedNumber ? (''+foundedNumber).length : 1;
    if (foundedNumber) {
      numbersArray.push(parseFloat(processedString));
    }
    processedString = processedString.substring(substingLength, processedString.length)
  }

  numbersArray.sort((a, b) => a - b)
  return {min: numbersArray.shift(), max: numbersArray.pop()};
}
