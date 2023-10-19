// CS10 grade Calculator
// Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
// Store order code in a function
function btnClicked() {
  // INPUT
  let sideA = +document.getElementById("a-in").value;
  let sideB = +document.getElementById("b-in").value;

  // PROCESS
  let total = Math.sqrt(sideA ** 2 + sideB ** 2);
  // OUTPUT
  document.getElementById("output").innerHTML = total;
}
