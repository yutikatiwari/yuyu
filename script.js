
// =============================================================================
// SIMPLE DOM MANIPULATION FUNCTIONS
// =============================================================================

// 1. TEXT MANIPULATION
// Function to change text content of an element
function changeText() {
    // Get the element by its ID
    var element = document.getElementById('demo-text');

    // Change the text content
    element.textContent = 'The text has been changed by JavaScript!';

    // Log to console for debugging
    console.log('Text changed successfully');
}

// Function to reset text to original
function resetText() {
    // Get the element and reset to original text
    var element = document.getElementById('demo-text');
    element.textContent = 'This is the original text.';

    console.log('Text reset to original');
}

// =============================================================================

// 2. INPUT AND DISPLAY
// Function to get input value and display it
function showInput() {
    // Get the input element
    var inputElement = document.getElementById('user-input');

    // Get the output element
    var outputElement = document.getElementById('output');

    // Get the value from input
    var userText = inputElement.value;

    // Check if input is empty
    if (userText === '') {
        outputElement.innerHTML = '<strong style="color:blue, red;">Please enter some text!</strong>';
    } else {
        // Display the input in the output area
        outputElement.innerHTML = '<strong>You entered:</strong> ' + userText;
    }

    console.log('User input displayed:', userText);
}

// Function to clear input and output
function clearInput() {
    // Clear the input field
    document.getElementById('user-input').value = '';

    // Clear the output area
    document.getElementById('output').textContent = 'Your output will appear here...';

    console.log('Input and output cleared');
}

// =============================================================================

// 3. STYLE MANIPULATION
// Function to change text color randomly
function changeColor() {
    // Get the element
    var element = document.getElementById('style-text');

    // Array of colors to choose from
    var colors = ['red', 'blue', 'green', 'purple', 'orange', 'brown'];

    // Pick a random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the color using CSS style property
    element.style.color = randomColor;

    console.log('Color changed to:', randomColor);
}

// Function to change font size
function changeSize() {
    // Get the element
    var element = document.getElementById('style-text');

    // Generate random size between 16px and 32px
    var randomSize = Math.floor(Math.random() * 17) + 16+20;

    // Change the font size
    element.style.fontSize = randomSize + 'px';

    console.log('Font size changed to:', randomSize + 'px');
}

// Function to add highlight class
function addHighlight() {
    // Get the element
    var element = document.getElementById('style-text');
    var colors = ['red', 'blue', 'green', 'purple', 'orange', 'brown'];

    // Pick a random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)];


    // Add CSS class for highlighting
    element.style.backgroundColor = randomColor;

    console.log('Highlight added');
}

// Function to remove highlight class
function removeHighlight() {
    // Get the element
    var element = document.getElementById('style-text');

    // Remove CSS class
    element.style.backgroundColor = "";

    console.log('Highlight removed');
}

// =============================================================================

// 4. SHOW/HIDE ELEMENTS
// Function to hide an element
function hideText() {
    // Get the element
    var element = document.getElementById('toggle-text');

    // Hide the element by setting display to 'none'
    element.style.display = 'none';

    console.log('Element hidden');
}

// Function to show an element
function showText() {
    // Get the element
    var element = document.getElementById('toggle-text');

    // Show the element by setting display to 'block'
    element.style.display = 'block';

    console.log('Element shown');
}

// Function to toggle element visibility
function toggleText() {
    // Get the element
    var element = document.getElementById('toggle-text');

    // Check current display state and toggle
    if (element.style.display === 'none') {
        element.style.display = 'block';
        console.log('Element toggled to visible');
    } else {
        element.style.display = 'none';
        console.log('Element toggled to hidden');
    }
}

// =============================================================================

// 5. CREATING AND REMOVING ELEMENTS
// Counter to keep track of created elements
var elementCounter = 0;

// Function to create and add new elements
function addNewElement() {
    // Increment counter
    elementCounter++;

    // Get the container where we'll add new elements
    var container = document.getElementById('new-elements-container');

    // Create a new paragraph element
    var newParagraph = document.createElement('p');

    // Set the text content
    newParagraph.textContent = 'This is paragraph number ' + elementCounter;

    // Add some styling
    newParagraph.style.padding = '10px';
    newParagraph.style.margin = '5px 0';
    newParagraph.style.backgroundColor = '#d4edda';
    newParagraph.style.borderRadius = '5px';

    // Give it an ID for easy identification
    newParagraph.id = 'dynamic-paragraph-' + elementCounter;

    // Add the new element to the container
    container.appendChild(newParagraph);

    console.log('New paragraph created with ID:', newParagraph.id);
}

// Function to remove the last created element
function removeLastElement() {
    // Get the container
    var container = document.getElementById('new-elements-container');

    // Check if there are any elements to remove
    if (container.children.length > 0) {
        // Get the last child element
        var lastElement = container.lastElementChild;

        // Log which element we're removing
        console.log('Removing element:', lastElement.id);

        // Remove the last element
        container.removeChild(lastElement);

        // Decrease counter
        elementCounter--;
    } else {
        // No elements to remove
        console.log('No elements to remove');
        alert('No elements to remove!');
    }
}

// =============================================================================

// 6. EVENT LISTENERS (Alternative to onclick)
// This runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and ready!');

    // Example of adding event listener instead of onclick
    // Uncomment the lines below to see alternative event handling

    /*
    document.getElementById('user-input').addEventListener('keypress', function(event) {
        // Check if Enter key was pressed
        if (event.key === 'Enter') {
            showInput(); // Call the showInput function
        }
    });
    */

    console.log('JavaScript DOM connection established successfully!');
});

// =============================================================================
// BASIC DOM SELECTION EXAMPLES
// =============================================================================

// Different ways to select DOM elements:

// 1. By ID (most common)
// var element = document.getElementById('element-id');

// 2. By Class Name (returns a collection)
// var elements = document.getElementsByClassName('class-name');

// 3. By Tag Name (returns a collection)
// var elements = document.getElementsByTagName('p');

// 4. Query Selector (CSS-style selection)
// var element = document.querySelector('#element-id'); // by ID
// var element = document.querySelector('.class-name'); // by class
// var elements = document.querySelectorAll('p'); // all paragraphs

// =============================================================================
// COMMON DOM PROPERTIES AND METHODS
// =============================================================================

/*
Common properties you can change:
- element.textContent = 'new text';
- element.innerHTML = '<strong>HTML content</strong>';
- element.style.color = 'red';
- element.style.backgroundColor = 'yellow';
- element.style.display = 'none'; // hide
- element.style.display = 'block'; // show
- element.className = 'css-class-name';
- element.value = 'new value'; // for input fields
 
Common methods:
- element.appendChild(newElement); // add child
- element.removeChild(childElement); // remove child
- document.createElement('tagname'); // create new element
- element.addEventListener('click', function); // add event listener
*/

console.log('Simple DOM manipulation script loaded successfully!');
