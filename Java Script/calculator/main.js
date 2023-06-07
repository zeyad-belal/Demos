let multi = document.querySelector(".multi");
let division = document.querySelector(".divi");
let subtract = document.querySelector(".subtract");
let add = document.querySelector(".add");

let btns = document.querySelectorAll(".tt");
let result = document.querySelector("span");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let C = document.querySelector(".C");

btns.forEach((btn) => {
  btn.onclick = function (e) {
    result.textContent += e.target.textContent;
  };
});

equal.onclick = function () {
  result.textContent = eval(result.textContent);
};

C.onclick = function () {
  result.textContent = "";
};

del.onclick = function () {
  result.textContent = result.textContent.slice(0, -1);
};

