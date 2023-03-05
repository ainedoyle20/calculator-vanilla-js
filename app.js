console.log("Hello World!");

let bigString = "";
let littleString = "";
let evalString = "";
let calcuated = false;

const equation = document.querySelector(".equation");
const result = document.querySelector(".result");

(() => {
  console.log("Running!");
  bigString = "";
  littleString = "";

  result.innerHTML = bigString ? bigString : "0";
  equation.innerHTML = littleString;
})();

const updateResultElement = () => {
  result.innerHTML = bigString ? bigString : "0";
}
const updateEquationElement = () => {
  equation.innerHTML = littleString;
}

const back = () => {
  if (!bigString || !evalString) return;
  bigString = bigString.split(" ").slice(0, -1).join(" ");
  evalString = evalString.split(" ").slice(0, -1).join(" ");
  calcuated=false;

  if (!bigString) {
    clear();
  } else {
    updateResultElement();
  }
}

const clear = () => {
  bigString = "";
  littleString = "";
  evalString = "";
  calcuated=false;

  updateResultElement();
  updateEquationElement();
}

const evaluate = () => {
  const res = eval(evalString);
  littleString = bigString;
  bigString = res.toString();
  evalString = res.toString();
  calcuated=true;

  updateResultElement();
  updateEquationElement();
}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", () => {

  if (!bigString) {
    bigString = btn.value;
    evalString = btn.value;
    calcuated = false;
  } else if (calcuated) {
    bigString = btn.value;
    evalString = btn.value;
    littleString = ""
    calcuated=false;
    updateEquationElement();
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

  calcuated = false;

  updateResultElement();
}));

const backBtn = document.querySelector("#back");
backBtn.addEventListener("click", back);

const ACBtn = document.querySelector(".AC");
ACBtn.addEventListener("click", clear);

const evaluateBtn = document.querySelector(".blue");
evaluateBtn.addEventListener("click", evaluate);