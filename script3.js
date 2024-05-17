//Clicar no botao Adicionar ao Carrinho
window.addEventListener('message', function(event) {
    const product = event.data;
    if (product && product.name && product.price && product.image) {
        const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
        let existingRow = Array.from(cart.getElementsByTagName('tr')).find(row => {
            return row.querySelector('td[data-name]').getAttribute('data-name') === product.name;
        });

        if (existingRow) {
            // Increment the quantity
            let quantityInput = existingRow.querySelector('input[type="number"]');
            quantityInput.value = parseInt(quantityInput.value) + 1;
        } else {
            // Create a new row
            const row = document.createElement('tr');

            const cellImage = document.createElement('td');
            cellImage.style.backgroundImage = `url(${product.image})`;
            cellImage.style.backgroundSize = '100%'
            cellImage.style.width = '100px';
            cellImage.style.height = '100px';
            row.appendChild(cellImage);

            const cellName = document.createElement('td');
            cellName.setAttribute('data-name', product.name);
            cellName.textContent = product.name;
            row.appendChild(cellName);

            const cellPrice = document.createElement('td');
            cellPrice.textContent = `R$${product.price}`;
            row.appendChild(cellPrice);

            const cellQuantity = document.createElement('td');
            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = 1;
            quantityInput.min = 1;
            cellQuantity.appendChild(quantityInput);
            row.appendChild(cellQuantity);

            cart.appendChild(row);
        }
    }
});

//Clicar no botao Comprar
window.addEventListener('message', function(event) {
    const product2 = event.data;
    if (product2 && product2.name && product2.price && product2.image) {
        const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
        let existingRow = Array.from(cart.getElementsByTagName('tr')).find(row => {
            return row.querySelector('td[data-name]').getAttribute('data-name') === product2.name;
        });

        if (existingRow) {
            // Increment the quantity
            let quantityInput = existingRow.querySelector('input[type="number"]');
            quantityInput.value = parseInt(quantityInput.value) + 0;
        } else {
            // Create a new row
            const row = document.createElement('tr');

            const cellImage = document.createElement('td');
            cellImage.style.backgroundImage = `url(${product2.image})`;
            cellImage.style.backgroundSize = '100%'
            cellImage.style.width = '100px';
            cellImage.style.height = '100px';
            row.appendChild(cellImage);

            const cellName = document.createElement('td');
            cellName.setAttribute('data-name', product2.name);
            cellName.textContent = product.name;
            row.appendChild(cellName);

            const cellPrice = document.createElement('td');
            cellPrice.textContent = `R$${product2.price}`;
            row.appendChild(cellPrice);

            const cellQuantity = document.createElement('td');
            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = 1;
            quantityInput.min = 1;
            cellQuantity.appendChild(quantityInput);
            row.appendChild(cellQuantity);

            cart.appendChild(row);
        }
    }
});

window.addEventListener('message', function(event) {
    // Verifica se a mensagem recebida é para rolar para o final
    if (event.data === 'button-buy-now') {
        // Rola para o final da página
        window.scrollTo(0, document.body.scrollHeight);
    }
});