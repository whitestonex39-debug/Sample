function calculateTax(price: number, taxRate: number): number {
  return Math.floor(price * taxRate);
}
