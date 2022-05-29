const clearAll = document.querySelector(".ce");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const sqrt = document.querySelector(".sqrt");
const equal = document.querySelector(".equal");
var input = document.querySelector(".screen p");

number.forEach(function (numb, x) {
  number[x].addEventListener("click",  () => {
    if (number[x] <= 0) {
      input.innerHTML += parseFloat(number[x].innerHTML);
    } else {
      input.innerHTML += number[x].innerHTML;
    }
    return parseFloat(input.innerHTML);
  });
});

operator.forEach(function (char, x) {
  operator[x].addEventListener("click", () => {
    var currentInput = input.innerHTML;
    var lastChar = currentInput[currentInput.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      var newInput =
        currentInput.substring(0, currentInput.length - 1) +
        operator[x].textContent;
      input.innerHTML = newInput;
    } else {
      input.innerHTML += operator[x].innerHTML;
    }
  });
});

clearAll.addEventListener("click", function () {
  input.innerHTML = "";
});

sqrt.addEventListener("click", function () {
  input.innerHTML = Math.sqrt(input.innerHTML);
});

equal.addEventListener("click", function () {
  let result = 0;
  var inputValue = input.innerHTML;
  var numbers = inputValue.split(/\+|\-|\*|\//g).map((a) => Number(a));
  // var numbers = numbersValues.map((a) => Number(a));
  const operators = inputValue.replace(/[0-9]|\./g, "").split("");

  // if (operators[0] == "+") {
  //   result = numbers.reduce((a, b) => a + b);
  // } else if (operators[0] == "-") {
  //   result = numbers.reduce((a, b) => a - b);
  // } else if (operators[0] == "*") {
  //   result = numbers.reduce((a, b) => a * b);
  // } else if (operators[0] == "/") {
  //   result = numbers.reduce((a, b) => a / b);
  // }

  // input.innerHTML = result;

  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("*");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];
});
