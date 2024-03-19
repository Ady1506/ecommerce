const fetchPromise = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        // Store the response in a variable
        const response = json;
        console.log(response);
        handleResponse(response);
    });

function handleResponse(response){
    const items=document.querySelector('.items');
    const buttons=document.querySelectorAll('button');
    renderProduct(response);
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            const category=button.getAttribute('id');
            const filterProduct=response.filter(product=>product.category===category);
            renderProduct(filterProduct);
        });
    });
    function renderProduct(products){
        items.innerHTML = '';
        products.forEach(product=>{
    
            const div=document.createElement('div');
            div.innerHTML=`
            <div class="article">
            <div class="img">
            <img src="${product.image}" alt="${product.title}" /></div>
            <div class="details">
                <h1>${product.title}</h1>
                <p>${product.category}</p>
                <div class="price">$ ${product.price}</div>
                
            </div>
    
        </div>
            `;
            div.addEventListener('click', () => {
                window.location.href = `page.html?productId=${product.id}`;
            });
            items.appendChild(div);
        })
    }

}



