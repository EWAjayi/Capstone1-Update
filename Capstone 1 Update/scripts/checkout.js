"use strict" 

window.onload = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cartContainer');
    const totalQuantityContainer = document.getElementById('totalQuantity');

    cartContainer.innerHTML = "";
    let totalQuantity = 0;

    cartItems.forEach(item => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-sm");

    cartItem.innerHTML = `<div class="d-flex justify-content-between align-items-center w-100">
                        <span class="mr-4">${item.name}</span>
                        <span class="text-muted">x: ${item.quantity}</span>
                    </div>`;

    cartContainer.appendChild(cartItem);

    totalQuantity += item.quantity; 
    });
    
    totalQuantityContainer.innerHTML = `<li class="list-group-item d-flex justify-content-center lh-sm">
                                        <div>
                                        <h6 class="my-0">Total Quantity: ${totalQuantity}</h6>
                                        </div>
                                    </li>`;
}