
function Product(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
}

Product.prototype.displayProduct = function () {
    return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
};

const laptop = new Product("Laptop", 50000, "Electronics");
const mouse = new Product("Mouse", 800, "Accessories");
const keyboard = new Product("Keyboard", 1500, "Accessories");

console.log(laptop.displayProduct());
console.log(mouse.displayProduct());
console.log(keyboard.displayProduct());


class ProductDetails {
    constructor(productName, price, category) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    getProductDetails() {
        return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

class ElectronicProduct extends ProductDetails {
    constructor(productName, price, category, warranty) {
        super(productName, price, category);
        this.warranty = warranty;
    }

    getWarranty() {
        return `Warranty: ${this.warranty}`;
    }
}

class ClothingProduct extends ProductDetails {
    constructor(productName, price, category, size) {
        super(productName, price, category);
        this.size = size;
    }

    getSize() {
        return `Size: ${this.size}`;
    }
}

const mobile = new ElectronicProduct("Mobile", 20000, "Electronics", "1 Year");
const shirt = new ClothingProduct("Shirt", 1200, "Clothing", "Large");

console.log(mobile.getProductDetails());
console.log(mobile.getWarranty());

console.log(shirt.getProductDetails());
console.log(shirt.getSize());

const calculatePrice = (price, discount) => {
    return price - (price * discount / 100);
};

console.log("Discounted Price:", calculatePrice(50000, 10));

const customer = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Mumbai"
};

const { name, email } = customer;

console.log(`Hello ${name}, your order of Laptop is confirmed. Total: ₹50000`);

function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log("Total Amount:", calculateTotal(50000, 800, 1500));

const product = {
    productName: "Laptop",
    price: 50000,
    category: "Electronics"
};

const updatedProduct = {
    ...product,
    price: 45000
};

console.log("Original Product:", product);
console.log("Updated Product:", updatedProduct);
console.log("Customer Email:", email);
