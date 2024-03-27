let dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector("button");
let fromVal = document.querySelector(".from select");
let toVal = document.querySelector(".to select");
let amount = document.querySelector(".amount input");

for (let select of dropdowns) {
  for (code in countryList) {
    let addOption = document.createElement("option");
    addOption.innerText = code;
    addOption.value = code;
    if (select.name == "from" && code == "USD") {
      addOption.selected = "selected";
    } else if (select.name == "to" && code == "INR") {
      addOption.selected = "selected";
    }
    select.append(addOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

let updateFlag = (evt) => {
  code = evt.value;
  let countryCode = countryList[code];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = evt.parentElement.querySelector("img");
  img.src = newSrc;
};

let updateExcahngeRate = async (evt) => {
  const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromVal.value.toLowerCase()}/${toVal.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amount.value = 1;
  }
  let message = document.querySelector(".msg");
  message.innerText = `${amountVal} ${fromVal.value} = ${
    data[toVal.value.toLowerCase()]
  } ${toVal.value}`;
};

window.addEventListener("load", (evt) => {
  evt.preventDefault();
  updateExcahngeRate();
});

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExcahngeRate();
});
