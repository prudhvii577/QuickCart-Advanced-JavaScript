
const cart = [
    { id: 101, name: "Laptop", price: 50000, quantity: 1, category: "Electronics" },
    { id: 102, name: "Mouse", price: 800, quantity: 2, category: "Accessories" },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, category: "Electronics" },
    { id: 105, name: "Headphones", price: 2500, quantity: 2, category: "Accessories" }
];

// Task 1 - Array Methods

const productTotals = cart.map(product => ({
    name: product.name,
    totalPrice: product.price * product.quantity
}));

console.log("Product Names and Total Prices:");
console.log(productTotals);

const expensiveProducts = cart.filter(product => product.price > 2000);

console.log("\nProducts Above ₹2000:");
console.log(expensiveProducts);

const cartTotal = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);

console.log("\nTotal Cart Value:", cartTotal);

console.log("\nProduct Details:");
cart.forEach(product => {
    console.log(product.name, product.category, product.quantity);
});

const electronicsTotal = cart
    .filter(product => product.category === "Electronics")
    .reduce((total, product) => total + product.price * product.quantity, 0);

console.log("\nElectronics Total:", electronicsTotal);


// Task 2 - Map and Set

const inventory = new Map();

cart.forEach(product => {
    inventory.set(product.id, { ...product });
});

console.log("\nProduct with ID 101:");
console.log(inventory.get(101));

const updatedItem = inventory.get(102);
updatedItem.quantity = 5;
inventory.set(102, updatedItem);

console.log("\nUpdated Mouse Quantity:");
console.log(inventory.get(102));

inventory.delete(105);

console.log("\nUpdated Inventory:");

inventory.forEach((product, id) => {
    console.log(id, product);
});

const emails = [
    "rahul@gmail.com",
    "priya@gmail.com",
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"
];

const uniqueEmails = [...new Set(emails)];

console.log("\nUnique Emails:");
console.log(uniqueEmails);


// Task 3 - Object.freeze() and Object.seal()

const productConfig = {
    name: "Laptop",
    price: 50000,
    stock: 20
};

const frozenProduct = { ...productConfig };

Object.freeze(frozenProduct);

frozenProduct.price = 45000;
frozenProduct.color = "Black";
delete frozenProduct.stock;

console.log("\nFrozen Product:");
console.log(frozenProduct);

const sealedProduct = { ...productConfig };

Object.seal(sealedProduct);

sealedProduct.price = 45000;
sealedProduct.color = "Black";
delete sealedProduct.stock;

console.log("\nSealed Product:");
console.log(sealedProduct);
