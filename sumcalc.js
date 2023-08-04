
function calcSum() {
    // Get the values from the input boxes
    const num1 = parseFloat(document.getElementById('box1').value);
    const num2 = parseFloat(document.getElementById('box2').value);
    
    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers in both boxes.');
      return;
    }
    
    // Calculate the sum and display it in the result box
    const sum = num1 + num2;
    document.getElementById('result').value = sum;
  }