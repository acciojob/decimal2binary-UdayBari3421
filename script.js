function decimalToBinary(num) {
  // Check if the input is a valid number
  if (isNaN(num) || !Number.isInteger(num) || num < 0) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  // Special case for 0
  if (num === 0) {
    return "0";
  }

  let binary = "";
  while (num > 0) {
    // Calculate the remainder when dividing by 2 (0 or 1)
    const remainder = num % 2;
    // Add the remainder to the binary string
    binary = remainder.toString() + binary;
    // Update the number by dividing it by 2 (integer division)
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
