document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            name: this.getAttribute('data-name'),
            price: this.getAttribute('data-price'),
            image: this.getAttribute('data-image')
        };
        window.parent.postMessage(product, '*');
    });
});