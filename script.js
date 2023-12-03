// let submitButton = document.getElementById("submit-btn");

// submitButton.addEventListener("click", function (event){
//     console.log('😀',event.target);
// });

// let deleteButton = document.getElementById("delete-btn");
// deleteButton.addEventListener('click', function (event) {
//     console.log('Oh no you deleted me!', event.target);
// });

function addingData(event) {
  //prevents page from refreshing when clicking
  event.preventDefault();
  let tBody = document.querySelector("tbody");
  let creatingRow = document.createElement("tr");
  let inputFirst = document.createElement("td");
  let inputLast = document.createElement("td");
  let inputEmpId = document.createElement("td");
  let inputTitle = document.createElement("td");
  let inputSalary = document.createElement("td");
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let employeeNumber = document.getElementById("employeenumber").value;
  let jobTitle = document.getElementById("jobtitle").value;
  let salary = document.getElementById("salary").value;
  let deleteButton = document.createElement("button");

  inputFirst.innerText = firstName;
  inputLast.innerText = lastName;
  inputEmpId.innerText = employeeNumber;
  inputTitle.innerText = jobTitle;
  inputSalary.innerText = salary;

  deleteButton.textContent = "Delete";

  creatingRow.append(
    inputFirst,
    inputLast,
    inputEmpId,
    inputTitle,
    inputSalary,
    deleteButton
  );
  tBody.append(creatingRow);

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("employeenumber").value = "";
  document.getElementById("jobtitle").value = "";
  document.getElementById("salary").value = "";
  totalMonthly();
}

function totalMonthly() {
  let tBody = document.querySelector("tbody");
  let footer = document.querySelector("footer");
  let sum = 0;

  for (let i = 1; i < tBody.rows.length; i++) {
    let salary = parseInt(tBody.rows[i].cells[4].innerHTML);
    sum += salary;
  }
  let totalMonthly = sum / 12;
  let formattedTotal = 'Total Monthly :' + ' ' + new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalMonthly);
  footer.textContent = formattedTotal;
  
  console.log(totalMonthly);
} 
