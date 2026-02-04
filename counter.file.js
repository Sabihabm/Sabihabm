let ElementcounterValue = document.getElementById("counterValue");

function onIncreament() {
  let previousValue = ElementcounterValue.textContent;
  let updatedValue = parseInt(previousValue) + 1;
  ElementcounterValue.textContent = updatedValue;
}

function onDecreament() {
  let previousValue = ElementcounterValue.textContent;
  let updatedValue = parseInt(previousValue) - 1;
  ElementcounterValue.textContent = updatedValue;
}

function onReset() {
    let counterValue = 0;
    ElementcounterValue.textContent = counterValue;
    ElementcounterValue.style.color = "black";
}