function reverseNumber(number) {
    // Convert the number to a string
    const numStr = number.toString();
  
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedStr, 10);
  
    return reversedNumber;
  }
  
  // Example usage:
  const originalNumber = 12345;
  const reversed = reverseNumber(originalNumber);
  console.log(`Original: ${originalNumber}, Reversed: ${reversed}`);