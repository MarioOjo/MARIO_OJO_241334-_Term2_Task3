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

function checkout() {
    window.location.href = 'index.html';
}