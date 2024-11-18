// Front-End JavaScript Code

const getAsyncBtn = document.getElementById("getAsync");

getAsyncBtn.addEventListener('click', getDataAsync);

const apiURL = 'http://localhost:3000/api/accessories'; // URL to fetch products

async function getDataAsync() {
    alert("Fetching products with async/await");

    try {
        const response = await fetch(apiURL);  // Fetch the products from the backend
        const data = await response.json();    // Parse the JSON response

        console.log(data); // Log the data to check it's being fetched
        renderProductData(data); // Render the products
    } catch (error) {
        console.error('Error fetching products:', error);
        alert("There was an error fetching the products.");
    }
}

// Function to render the fetched product data
function renderProductData(products) {
    const productsListContainer = document.getElementById("products-list");

    // Clear any existing content in the container
    productsListContainer.innerHTML = '';

    // Loop through the products and create HTML for each
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        // Create and append product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Create and append product description
        const productDesc = document.createElement('p');
        productDesc.textContent = product.description;
        productDiv.appendChild(productDesc);

        // Append the product div to the container
        productsListContainer.appendChild(productDiv);
    });
}
