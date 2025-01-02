// Intermediate: Create a shopping cart price calculator that applies various discounts and taxes. The calculator should be built using pure functions that can be composed together. Consider different types of discounts (percentage-based, fixed amount) and tax calculations.

const cart = [
  {
    id: 1,
    name: "T-shirt",
    price: 20.0,
    quantity: 2,
    category: "clothing",
  },
  {
    id: 2,
    name: "Headphones",
    price: 100.0,
    quantity: 1,
    category: "electronics",
  },
  {
    id: 3,
    name: "Book",
    price: 15.0,
    quantity: 3,
    category: "books",
  },
];

// Discount rules
const discounts = {
  percentage: {
    clothing: 20, // 20% off clothing
    electronics: 10, // 10% off electronics
  },
  fixedAmount: {
    books: 5, // $5 off books
  },
};

// Tax rates by category
const taxRates = {
  clothing: 8.5, // 8.5% tax
  electronics: 10, // 10% tax
  books: 5, // 5% tax
};

const calculateDiscount = (discounts, amount, category) => {
  if(discounts.percentage[category]) {
    return (amount * discounts.percentage[category]) / 100
  }
  if(discounts.fixedAmount[category]) {
    return discounts.fixedAmount[category]
  }

  return 0
}

const calculatePriceAfterDiscount = (amount, category) => {
  const discount = calculateDiscount(discounts, amount, category)
  return amount - discount
};

const calculateSubTotal = (priceAfterDiscount, quantity) =>
  priceAfterDiscount * quantity;

const calculateTax = (taxRates, amount, category) => {
  if(!taxRates[category]) {
    throw new Error(`Invalid Category: ${category}`)
  }

  return (amount * taxRates[category]) / 100;
}

const calculatePriceAfterTax = (subTotal, category) => {
  const taxAmount = calculateTax(taxRates, subTotal, category)
  return subTotal + taxAmount
};

const cartPriceCalulator = (cart) => {
  const pricesAfterTax = cart.map((product) => {
    const { price, quantity, category } = product;

    const priceAfterDiscount = calculatePriceAfterDiscount(price, category);
    const subTotal = calculateSubTotal(priceAfterDiscount, quantity);
    const priceAfterTax = calculatePriceAfterTax(subTotal, category);

    return priceAfterTax;
  });

  return pricesAfterTax.reduce((acc, currentPrice) => acc + currentPrice, 0);
};

console.log(cartPriceCalulator(cart));
