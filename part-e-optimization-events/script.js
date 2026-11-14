const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const searchProducts = debounce(function (event) {
    const searchText = event.target.value;

    searchResult.textContent = searchText
        ? `Searching for: ${searchText}`
        : "Enter a product name to search.";

    console.log("Searching for:", searchText);
}, 500);

searchInput.addEventListener("input", searchProducts);


function throttle(callback, delay) {
    let lastCall = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastCall >= delay) {
            lastCall = currentTime;
            callback(...args);
        }
    };
}

const handleScroll = throttle(function () {
    console.log("Scroll event executed:", new Date().toLocaleTimeString());
}, 1000);

window.addEventListener("scroll", handleScroll);


function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}

function memoize(callback) {
    const cache = new Map();

    return function (price, percentage) {
        const key = `${price}-${percentage}`;

        if (cache.has(key)) {
            console.log("Getting result from cache");
            return cache.get(key);
        }

        console.log("Calculating discount for the first time");

        const result = callback(price, percentage);
        cache.set(key, result);

        return result;
    };
}

const memoizedDiscount = memoize(calculateDiscount);

const discountButton = document.getElementById("discountButton");
const discountResult = document.getElementById("discountResult");

discountButton.addEventListener("click", function () {
    const result = memoizedDiscount(5000, 10);

    discountResult.textContent = `Final price after discount: ₹${result}`;
});


const bubblingContainer = document.getElementById("bubblingContainer");

bubblingContainer.addEventListener("click", function () {
    console.log("Parent container clicked");
});

bubblingContainer.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function () {
        console.log("Remove button clicked");
    });
});


const stopContainer = document.getElementById("stopContainer");
const stopButton = document.getElementById("stopButton");

stopContainer.addEventListener("click", function () {
    console.log("Parent container clicked");
});

stopButton.addEventListener("click", function (event) {
    console.log("Button clicked");
    event.stopPropagation();
});


const delegationContainer = document.getElementById("delegationContainer");

delegationContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        const product = event.target.closest(".product-item");

        if (product) {
            product.remove();
            console.log("Product removed successfully");
        }
    }
});