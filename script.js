// Define a function to create a new set of input fields
function addPaperInputs() {
  // Get the container element where we'll add the new inputs
  var form = document.getElementById("paper-form");

  // Create a new div element to hold the input fields
  var paperDiv = document.createElement("div");

  // Set the class name of the new div element
  paperDiv.className = "paper";

  // Add the input fields to the new div element
  paperDiv.innerHTML = `
    <label for="paperName">Paper Name:</label>
    <input type="text" name="paperName[]">

    <label for="paper-length">Paper Length:</label>
    <input type="number" name="paper-length[]">

    <label for="paper-days">Days to Complete:</label>
    <input type="number" name="paper-days[]">

    <label for="paper-daily-hours">Daily Hours:</label>
    <input type="number" name="paper-daily-hours[]">

    <label for="paper-pace">Words per Hour:</label>
    <input type="number" name="paper-pace[]">

    <label for="paper-execution">Paper Execution:</label>
    <select name="paper-execution[]">
      <option value="greedy">Quickly:</option>
      <option value="spaced">Spaced out evenly:</option>
    </select>
  `;

  // Add the new div element to the container
  form.appendChild(paperDiv);
}

// Add an event listener to the "Add Paper" button
document.getElementById("add-paper-button").addEventListener("click", function() {
  addPaperInputs();
});

