// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.0005m.

// Examples
// layerThickness(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

// layerThickness(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

// layerThickness(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)

// Notes
// There are 1000mm in a single meter.
// Do not round answers.


function layerThickness(n) {
    return `Paper folded ${n} time(s) is ${2**n * 0.0005}m.`
  }
  
  
  console.log(layerThickness(4))