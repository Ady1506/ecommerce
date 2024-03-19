const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
const fetchPromise = fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(json => {
        // Store the response in a variable
        const response = json;
        const div = document.createElement('div');
        const container = document.querySelector('.product-container');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${response.image}" alt="Product Image" class="product-image">
            <div class="product-details">
            <h2 class="product-title">${response.title}</h2>
            <p class="product-description">${response.description}</p>
            <p class="product-price">$ ${response.price}</p>
            <button class="add-to-cart-btn cart">Add to Cart</button>
            </div>
        `;
        const cart=div.querySelector('.cart');
        // cart.addEventListener('click',()=>{
        //     window.location.href = `cart.html?productId=${response.id}`;
        // }); 

        container.appendChild(div);

    });