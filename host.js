var jsonFile = "https://raw.githubusercontent.com/alessioamo/Family-Feud/main/questions.json";
var dataArray;

function displayQuestion() {
    console.log(dataArray);
    // Get the input value
    const inputValue = parseInt(document.getElementById("questionNumber").value);

    const displayedQuestion = Object.keys(dataArray)[inputValue];
    const displayedAnswer = dataArray[displayedQuestion];

    // Get the table body element
    const tableBody = document.getElementById("answerTable").getElementsByTagName('tbody')[0];
    
    // Clear any existing rows
    tableBody.innerHTML = "";

    document.getElementById("showQuestion").textContent = displayedQuestion;

    for (i = 0; i < displayedAnswer.length; i++) {
        const row = tableBody.insertRow();
        
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = i+1;
        cell2.textContent = displayedAnswer[i][0];
        cell3.textContent = displayedAnswer[i][1];
    }
}

// Trigger the function when Enter is pressed inside the input box
document.getElementById("questionNumber").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        displayQuestion();
    }
});

fetch(jsonFile)
  .then(response => {
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
})
  .then(data => {
    dataArray = data;  // Update the global dataArray here
    console.log("Fetched Data Array:", dataArray);  // Debug log
})
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
});
