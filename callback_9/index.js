// <!-- Example - 1 - start  -->
const button = document.getElementById('myButton');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  output.textContent = 'Button clicked!';
});
// <!-- Example - 1 - end  -->


// <!-- Example - 2 - start  -->
const textInput = document.getElementById('textInput');
const output2 = document.getElementById('output2');

textInput.addEventListener('input', () => {
  const inputValue = textInput.value;
  output2.textContent = 'Input: ' + inputValue;
});
// <!-- Example - 2 - end  -->


// <!-- Example - 3 - start  -->
const contextMenu = document.getElementById('contextMenu');
const output3 = document.getElementById('output3');

contextMenu.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Відміна стандартного контекстного меню
  output3.textContent = 'Context menu opened!';
});
// <!-- Example - 3 - end  -->
