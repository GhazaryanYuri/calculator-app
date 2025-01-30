let outPut = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");

let selectedOperator = "";
let resultOutput = "";

numberBtns.forEach((number, index) => {
  number.addEventListener("click", () => {
    if (numberBtns[index].innerHTML) {
      outPut.value += number.innerHTML;
    }
  });
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    outPut.value += e.target.innerHTML;

    selectedOperator = e.target.innerHTML;
  });
});

function resultFucntion() {
  switch (selectedOperator) {
    case "+":
      resultOutput = outPut.value;
      break;
    case "-":
      resultOutput = outPut.value;
      break;
    case "*":
      resultOutput = outPut.value;
      break;
    case "/":
      resultOutput = outPut.value;
      break;
  }
}

equalBtn.addEventListener("click", () => {
  resultFucntion();

  if (eval(resultOutput) === Infinity) {
    outPut.value = "Error";
  } else {
    outPut.value = eval(resultOutput);
  }
});

deleteBtn.addEventListener("click", () => {
  outPut.value = "";
});
