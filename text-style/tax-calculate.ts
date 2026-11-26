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

//使用例
const result = calculatePriceWithTax(1000, 0.1);
console.log(result); // 1100
