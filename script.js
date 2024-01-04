// Selecting elements
const tipAmountElement = document.getElementById("tip-amount");
const totalAmountElement = document.getElementById("total-amount");
const calculateBtn = document.querySelector(".calculate");

// Function to calculate tip and total amounts
function calculateAmounts() {
  // Fetching user input
  const billInput = document.querySelector(".bill");
  const tipInput = document.querySelector(".tip");

  // Parsing input values as floats
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);

  // Check if the values are valid numbers
  if (isNaN(bill) || isNaN(tip)) {
    // If input is invalid, do nothing
    return;
  }

  // Calculate tip and total amounts
  const tipAmount = Math.round((tip / 100) * bill, 2);
  const totalAmount = bill + tipAmount;

  // Display the results with currency format
  tipAmountElement.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalAmountElement.innerHTML = `$${totalAmount.toFixed(2)}`;
}

// Adding click event listener to the calculate button
calculateBtn.addEventListener("click", calculateAmounts);

