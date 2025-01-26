let theOperation = localStorage.getItem('calculations') 
|| '';

function calculation(operation) {
  theOperation += operation;
  localStorage.setItem('calculations', theOperation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-display')
   .value = theOperation;
}

function clearDisplay() {
  theOperation = '';
  displayCalculation();
  localStorage.setItem('calculations', theOperation);
}

function calculate() {
    theOperation = eval(theOperation).toString();
  displayCalculation();
  localStorage.setItem('calculations', theOperation);
}

// improving the calculator

// del feature
function delFeature() {
  theOperation = theOperation.slice(0, -1);
  displayCalculation();
  localStorage.setItem('calculations', theOperation);
}
// adding the comma feature


