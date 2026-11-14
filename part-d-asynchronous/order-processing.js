
console.log("TASK 1 - Event Loop");

console.log("Order Started");

setTimeout(() => {
    console.log("Payment Processing");
}, 0);

Promise.resolve().then(() => {
    console.log("Payment Successful");
});

console.log("Order Completed");


// TASK 2 - Callbacks

function validateOrder(callback) {
    setTimeout(() => {
        console.log("Order Validated");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment Completed");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation Sent");
        callback();
    }, 1000);
}

function placeOrderWithCallbacks() {
    validateOrder(() => {
        processPayment(() => {
            sendConfirmation(() => {
                console.log("Callback Order Completed");
                runPromiseTasks();
            });
        });
    });
}


// TASK 3 - Promises

function validateOrderPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Order Validated");
            resolve();
        }, 1000);
    });
}

function processPaymentPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Payment Completed");
            resolve();
        }, 1000);
    });
}

function sendConfirmationPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Confirmation Sent");
            resolve();
        }, 1000);
    });
}

function runPromiseTasks() {
    console.log("\nTASK 3 - Promises");

    validateOrderPromise()
        .then(() => processPaymentPromise())
        .then(() => sendConfirmationPromise())
        .then(() => {
            console.log("Promise Order Completed");
            runAsyncTask();
        })
        .catch(error => {
            console.log("Error:", error);
        });
}


// TASK 4 - Async/Await

async function placeOrder() {
    try {
        await validateOrderPromise();
        await processPaymentPromise();
        await sendConfirmationPromise();

        console.log("Order Confirmed Successfully!");
        runPromiseCombinators();
    } catch (error) {
        console.log("Order Failed:", error);
    }
}

function runAsyncTask() {
    console.log("\nTASK 4 - Async/Await");
    placeOrder();
}


// TASK 5 - Promise Combinators

function productsAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 1000);
    });
}

function paymentAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Payment Service Failed");
        }, 1500);
    });
}

function deliveryAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Delivery Loaded");
        }, 2000);
    });
}

async function runPromiseCombinators() {
    console.log("\nTASK 5 - Promise Combinators");

    try {
        const result = await Promise.all([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);
        console.log("Promise.all:", result);
    } catch (error) {
        console.log("Promise.all Error:", error);
    }

    const allResults = await Promise.allSettled([
        productsAPI(),
        paymentAPI(),
        deliveryAPI()
    ]);

    console.log("\nPromise.allSettled:");
    console.log(allResults);

    const raceResult = await Promise.race([
        productsAPI(),
        paymentAPI(),
        deliveryAPI()
    ]).catch(error => error);

    console.log("\nPromise.race:", raceResult);

    const anyResult = await Promise.any([
        productsAPI(),
        paymentAPI(),
        deliveryAPI()
    ]);

    console.log("\nPromise.any:", anyResult);
}

console.log("\nStarting Order Processing...");
placeOrderWithCallbacks();
