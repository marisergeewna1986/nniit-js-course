//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
    return "";
  }
  return `${str[0].toUpperCase()}${str.substr(1)}`;
}

//Напишите функцию, которая вернет строку, учеченую до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
  if (!str) return;
  if (str.length < n) {
    return str;
  }
  return `${str.substr(0, n)}...`;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
    if (parseFloat(obj[key])) {
      obj[key] *= 2;
    }
  }

  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};