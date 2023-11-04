const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
function hasKey(key) {
  // Check if the global object sampleObject has the specified key
  return sampleObject.hasOwnProperty(key);
}

// The global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Example usage:
console.log(hasKey("red"));    // Output: true
console.log(hasKey("blue"));   // Output: false
console.log(hasKey("white"));  // Output: true

