console.log("Hello World!");

let bigString = "";
let littleString = "Ans = 0";
let evalString = "";

const equation = document.querySelector(".equation");
const result = document.querySelector(".result");

(() => {
  console.log("Running!");
  bigString = "";
  littleString = "Ans = 0";

  result.innerHTML = bigString ? bigString : "0";
  equation.innerHTML = littleString;
})();

const updateResultElement = () => {
  result.innerHTML = bigString ? bigString : "0";
}
const updateEquationElement = () => {
  equation.innerHTML = littleString;
}

const clear = () => {
  bigString = "";
  littleString = "Ans = 0";
  evalString = "";

  updateResultElement();
  updateEquationElement();
}

const evaluate = () => {
  console.log("got here", evalString)
  const res = eval(evalString);
  littleString = bigString;
  bigString = res;

  updateResultElement();
  updateEquationElement();
}

// e.target.childNodes[0].data;

const calculateNum = (eq) => {
  console.log("calculating...");
}

const pressedEqualHandler = () => {
  console.log("pressed equals button!");
}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", () => {

  if (!bigString) {
    bigString = btn.value;
    evalString = btn.value;
  } else {
    bigString += btn.value;
    evalString += btn.value;
  }

  updateResultElement();
}));

const evalBtns = document.querySelectorAll(".eval_btn");
evalBtns.forEach(btn => btn.addEventListener("click", (e) => {

  if (!bigString) return;

  bigString += ` ${e.target.childNodes[0].data} `;
  evalString += btn.value;
  

  updateResultElement();
}));

const ACBtn = document.querySelector(".AC");
ACBtn.addEventListener("click", clear);

const equalBtn = document.querySelector(".blue");
equalBtn.addEventListener("click", evaluate);