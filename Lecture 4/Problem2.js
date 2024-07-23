// For a given array with pricesof 5 items -> [250, 645, 300, 900, 50].
// All items have an offer of 10% off on them. Change the arrays to store the final price after.


let prices = [250, 645, 300, 900, 50];

// Using a for loop to iterate through each price in the array

for (let i = 0; i < prices.length; i++) {
  // Applying 10% discount to the price
  let discountedPrice = prices[i] * 0.9;
  
  // Printing the final price after discount
  console.log(discountedPrice); // Output: [225, 599.5, 270, 810, 45]
}


console.log("-----------------------------------------------------------------"); // Output: [2250, 5995, 2700, 8100, 450]

for (let i = 0; i < prices.length; i++) {
    // Applying 10% discount to the price
    let offer = prices[i] /10;
  
    // Updating the price in the array with the discounted price
    let discount = prices[i] - offer ;
    console.log(discount); // Output: [225, 599.5, 270, 810, 45]
  }
