
console.log("TASK 1 - JSON Handling");

const order = {
    orderId: 501,
    customer: "Rahul",
    amount: 5000,
    deliveryDate: undefined,
    discount: null,
    calculateTax: function () {
        return 500;
    }
};

const jsonData = JSON.stringify(order);

console.log("JSON Data:");
console.log(jsonData);

const convertedOrder = JSON.parse(jsonData);

console.log("Converted Object:");
console.log(convertedOrder);

console.log("\nTASK 2 - Output Prediction");

console.log("\nQ1 - Undefined in an object");
console.log(JSON.stringify({ name: "Rahul", age: undefined }));

console.log("\nQ2 - Undefined in an array");
console.log(JSON.stringify([10, undefined, 30]));

console.log("\nQ3 - NaN and Infinity");
console.log(JSON.stringify({ price: NaN, discount: Infinity }));

console.log("\nQ4 - Invalid JSON");
try {
    console.log(JSON.parse("{name: 'Rahul', age: 25}"));
} catch (error) {
    console.log("Error: Invalid JSON format");
}

console.log("\nQ5 - Circular Reference");
const user = { name: "Rahul" };
user.self = user;

try {
    console.log(JSON.stringify(user));
} catch (error) {
    console.log("Error: Circular reference cannot be converted to JSON");
}

console.log("\nQ6 - Date Object");
console.log(JSON.stringify({ createdAt: new Date("2026-01-01") }));
