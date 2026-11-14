
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getDetails() {
        return `${this.name} - ₹${this.price} x ${this.quantity}`;
    }
}

const products = [
    new Product(101, "Laptop", 50000, 1),
    new Product(102, "Mouse", 1000, 2),
    new Product(103, "Monitor", 15000, 1),
    new Product(104, "Keyboard", 2000, 1)
];

console.log("QUICKCART ORDER SUMMARY");

const { name: firstProduct, price } = products[0];

console.log("\nFirst Product:", firstProduct);
console.log("Price:", price);

const productTotals = products.map(product => ({
    name: product.name,
    total: product.price * product.quantity
}));

console.log("\nProduct-wise Total:");
productTotals.forEach(product => {
    console.log(`${product.name}: ₹${product.total}`);
});

const expensiveProducts = products.filter(product => product.price > 5000);

console.log("\nProducts Above ₹5000:");
expensiveProducts.forEach(product => {
    console.log(product.name);
});

const orderTotal = products.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);

console.log("\nOrder Total: ₹" + orderTotal);

const productIds = new Set(products.map(product => product.id));

console.log("Unique Product Count:", productIds.size);

const inventory = new Map();

products.forEach(product => {
    inventory.set(product.id, product);
});

console.log("\nInventory Details:");

inventory.forEach((product, id) => {
    console.log(id, product.name, product.quantity);
});

const orderConfig = {
    orderId: 501,
    customer: "Rahul",
    status: "Confirmed"
};

Object.freeze(orderConfig);

console.log("\nOrder Configuration:");
console.log(orderConfig);

const order = {
    orderId: orderConfig.orderId,
    customer: orderConfig.customer,
    products: productTotals,
    totalAmount: orderTotal
};

const orderJSON = JSON.stringify(order);

console.log("\nJSON Order Data:");
console.log(orderJSON);

function sendConfirmation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order confirmation sent successfully");
        }, 1000);
    });
}

async function placeOrder() {
    try {
        console.log("\nProcessing Order...");

        const message = await sendConfirmation();

        console.log(message);

        console.log(
            `Hello ${order.customer}, your order #${order.orderId} has been confirmed. Total amount: ₹${order.totalAmount}.`
        );
    } catch (error) {
        console.log("Order failed:", error);
    }
}

placeOrder();
