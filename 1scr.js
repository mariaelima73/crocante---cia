window.addEventListener('message', function(event) {
    const product = event.data;
    if (product && product.name && product.price && product.image) {
        const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const row = document.createElement('tr');

        const cellImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        cellImage.appendChild(img);
        row.appendChild(cellImage);

        const cellName = document.createElement('td');
        cellName.textContent = product.name;
        row.appendChild(cellName);

        const cellPrice = document.createElement('td');
        cellPrice.textContent = `R$${product.price}`;
        row.appendChild(cellPrice);

        cart.appendChild(row);
    }
});