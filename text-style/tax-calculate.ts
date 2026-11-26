function calculateTax(price: number, taxRate: number): number {
  return Math.floor(price * taxRate);
}

function calculateTotal(price: number, tax: number): number {
  return price + tax;
}

function calculatePriceWithTax(price: number, taxRate: number): number {
  const tax = calculateTax(price, taxRate);
  return calculateTotal(price, tax);
}
