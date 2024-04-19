import { generateReturnsArray } from "./src/investmentGoals";

const form = document.getElementById("investment-form");
//const calculateButton = document.getElementById("calculate-results");
const clearFormButton = document.getElementById("clear-form");

function renderProgression(event) {
  event.preventDefault();
  if (document.querySelector(".error")) {
    return;
  }
  //const startingAmount = Number(form["startingAmount"].value);
  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value.replace(",", ".")
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(
    document.getElementById("return-rate").value.replace(",", ".")
  );
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(
    document.getElementById("tax-rate").value.replace(",", ".")
  );

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}

function clearForm() {
  form["starting-amount"].value = "";
  form["additional-contribution"].value = "";
  form["time-amount"].value = "";
  form["return-rate"].value = "";
  form["tax-rate"].value = "";

  const errorInputContainers = document.querySelectorAll(".error");
  for (const errorInputContainer of errorInputContainers) {
    errorInputContainer.classList.remove("error");
    errorInputContainer.parentElement.querySelector("p").remove();
  }
}

function validateinput(event) {
  if (event.target.value === "") {
    return;
  }
  //const parentElement = event.target.parentElement
  const { parentElement } = event.target; // Destructuring
  const grandParentElement = event.target.parentElement.parentElement; // Destructuring

  const inputValue = event.target.value.replace(",", ".");
  if (
    !parentElement.classList.contains("error") &&
    (isNaN(inputValue) || Number(inputValue) < 0)
  ) {
    //Objetivo: <p class="text-red-500">Insira Um valor numérico e maior que zero</p>
    const errorTextElement = document.createElement("p"); //<p></p>
    errorTextElement.classList.add("text-red-500"); //<p class="text-red-500"></p>
    errorTextElement.innerText = "Insira um valor numérico e maior que zero"; //Objetivo: <p class="text-red-500">Insira Um valor numérico e maior que zero</p>
    parentElement.classList.add("error");
    grandParentElement.appendChild(errorTextElement);
  } else if (
    parentElement.classList.contains("error") &&
    !isNaN(inputValue) &&
    inputValue > 0
  ) {
    parentElement.classList.remove("error");
    grandParentElement.querySelector("p").remove();
  }
}

for (const formElement of form) {
  if (formElement.tagName === "INPUT" && formElement.hasAttribute("name")) {
    formElement.addEventListener("blur", validateinput);
  }
}

form.addEventListener("submit", renderProgression);
//calculateButton.addEventListener("click", renderProgression);
clearFormButton.addEventListener("click", clearForm);
