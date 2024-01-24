"use strict";

window.onload = () => {
    displayProducts(productsArray);

    const searchInput = document.getElementById('searchInput');
    searchInput.oninput = () => {
        searchFilter();
    }
}

function addToCart(event) {
    if (event.target.classList.contains("addToCartBtn")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const selectedProduct = productsArray.find(product => product.id === productId);

        if (selectedProduct) {
    
            const foundProduct = cartItems.find(item => item.id === productId);

            if (foundProduct) {
                foundProduct.quantity += 1;
                alert(`${selectedProduct.name} added to cart!`);
            } 
            else {
                cartItems.push({ id: productId, name: selectedProduct.name, quantity: 1 });
                alert(`${selectedProduct.name} added to cart!`);
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } 
        else {
            console.error("Product not found!");
        }
    }
}

function displayProducts(productList) {
    const productContainer = document.getElementById('productsContainer');
    productContainer.addEventListener("click", addToCart);
    productContainer.innerHTML = "";

    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<div>
                                    <div class="card border-primary bg-altlight mx-3 px-3" style="width:100%; min-height: 525px; max-height: 525px; max-width: 350px ; min-width: 350px; padding-bottom: 10%; margin-bottom: 20%; box-shadow: 10px 8px 14px 0 rgba(22, 22, 26, 0.18);">
                                    <img class="pt-2"src="${product.img}">
                                    <!-- Card content -->    
                                    <div class="card-body">
                                    <h5>${product.name}</h5>
                                    <p><small>${product.description}</small></p>
                                        <div class="d-flex justify-content-center" style="font-size: 100%;">
                                        <!-- Fix the missing closing quote here -->
                                        <button class="addToCartBtn" data-id="${product.id}" class="border-primary bg-light" style="border-radius: 15%;">Add to Cart</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
        productContainer.appendChild(productDiv);
    });
}

function searchFilter() {
    const searchValue = searchInput.value.toLowerCase();
    const searchedProducts = productsArray.filter(product => product.name.toLowerCase().includes(searchValue));
    displayProducts(searchedProducts);
}