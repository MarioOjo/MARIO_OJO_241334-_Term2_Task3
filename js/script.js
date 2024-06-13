document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Thank you for your message!'); // Display the thank you message
});



function openModal() {
    document.getElementById('cartModal').style.display = "block";
}

function closeModal() {
    document.getElementById('cartModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('R', ''));
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        total += price * quantity;
    });
    document.getElementById('cartTotal').textContent = 'R ' + total.toFixed(2);
}



document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchQuery !== "") {
        // Remove previous highlights
        removeHighlights();
        // Highlight new search terms
        highlightSearchResults(searchQuery);
    } else {
        alert('Please enter a search term');
    }
});

function removeHighlights() {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        element.classList.remove('highlight');
        element.innerHTML = element.textContent; // Remove spans
    });
}

function highlightSearchResults(searchQuery) {
    var elements = document.querySelectorAll('h1, h3, p, div'); // Add more selectors if needed
    elements.forEach(function(element) {
        var innerHTML = element.innerHTML.toLowerCase();
        if (innerHTML.includes(searchQuery)) {
            var regex = new RegExp('(' + searchQuery + ')', 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = {};
    const flightsContainer = document.getElementById('flightsContainer');
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const viewCartBtn = document.getElementById('viewCartBtn');
    const closeBtn = document.getElementsByClassName('close')[0];

    flightsContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.classList.contains('red-button')) {
            const flightDiv = event.target.closest('.flexRow');
            const destination = flightDiv.getAttribute('data-destination');
            const price = parseFloat(flightDiv.getAttribute('data-price'));

            if (!cart[destination]) {
                cart[destination] = { price: price, quantity: 0 };
            }

            cart[destination].quantity++;
            updateCart();
        }
    });

    viewCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';

        let total = 0;

        for (const destination in cart) {
            const item = cart[destination];
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const itemDetails = `
                <p>${destination}</p>
                <p>Price: R ${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: R ${itemTotal.toFixed(2)}</p>
            `;
            cartItem.innerHTML = itemDetails;
            cartItemsContainer.appendChild(cartItem);
        }

        totalPriceElement.innerText = total.toFixed(2);
    }
});
