const clearAll = document.querySelector(".ce");
const clear = document.querySelector(".clear");
const number = document.querySelectorAll(".number");
const plusMinus = document.querySelector(".plus-minus");
const sqrt = document.querySelector(".sqrt");
var num = document.querySelector(".number1");
const percentages = document.querySelector(".percentages");
const equal = document.querySelector(".equal");
var input = document.querySelector(".screen p");

function sum(a, b) {
  return a + b;
}

number.forEach(function (numb, x) {
  number[x].addEventListener("click", function () {
    if (number[x] <= 0) {
      input.textContent += parseFloat(number[x].textContent);
    } else {
      input.textContent += number[x].textContent;
    }
    return parseFloat(input.textContent);
  });
});

clearAll.addEventListener("click", function () {
  input.textContent = "";
});

clear.addEventListener("click", function () {});

sqrt.addEventListener("click", function () {
  input.textContent = Math.sqrt(input.textContent);
});

equal.addEventListener("click", function () {
  let result = 0;
  var inputValue = input.innerHTML;
  var numbersValues = inputValue.split(/\+|\-|\*|\//g);
  var numbers = numbersValues.map((a) => Number(a));
  const operators = inputValue.replace(/[0-9]|\./g, "").split("");
  // add
  if (operators[0] == "+") {
    result = numbers.reduce((a, b) => a + b);
  } else if (operators[0] == "-") {
    result = numbers.reduce((a, b) => a - b);
  } else if (operators[0] == "*") {
    result = numbers.reduce((a, b) => a * b);
  } else if (operators[0] == "/") {
    result = numbers.reduce((a, b) => a / b);
  }

  input.innerHTML = result;
});
