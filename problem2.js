// Function to calculate the length of text excluding spaces
function calculateLength() {
    // Retrieve the text from the input element
    const userInput = document.getElementById('userInput').value;
    
    // Calculate the length excluding spaces
    const lengthExcludingSpaces = userInput.replace(/\s+/g, '').length;
    
    // Update the content of the <span> element with the calculated length
    document.getElementById('result').textContent = lengthExcludingSpaces;
}

// Add an event listener to the button to trigger the calculation on click
document.getElementById('calculateButton').addEventListener('click', calculateLength);
