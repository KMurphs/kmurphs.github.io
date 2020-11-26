/**
 * @param  {} amount
 * @param  {} taxRate
 */// Simple function that calculates tax for a certain amount
const calculateTax = function(amount, taxRate){
  return amount * taxRate;
}

// Straightforward Higher Order Function that prepends a currency symbol to a function with a similar signature as "calculateTax"
const prependCurrencySymbol = function(simpleCalculateTax, symbol = "$"){
  
  // Builds an augmented version of the simpleCalculateTax function that also append the currency symbol
  const modifiedCalculateTax = function(amount, taxRate){
    return `${symbol}${simpleCalculateTax(amount, taxRate)}`;
  }
  
  // Return a new function that is the augmented version of the original function
  return modifiedCalculateTax;
}

// Simple functions that use the higher order function for augmenting the simple calculate tax function
// Now these new functions return the tax amount with a currncy symbol
const calculateTaxWithDollarSymbol = prependCurrencySymbol(calculateTax, "$")
const calculateTaxWithPoundSymbol = prependCurrencySymbol(calculateTax, "£")



calculateTax(10, 0.14)
// 1.4000000000000001

calculateTaxWithDollarSymbol(10, 0.14)
//"$1.4000000000000001"

calculateTaxWithPoundSymbol(10, 0.14)
//"£1.4000000000000001"