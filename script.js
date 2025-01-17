document.addEventListener('DOMContentLoaded', () => {
    const wishForm = document.getElementById('wishForm');
    const wishesList = document.getElementById('wishesList');

    // Load existing wishes from Local Storage
    let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    // Function to render the wish list
    function updateWishList() {
        wishesList.innerHTML = '';
        wishes.forEach(({ name, message }) => {
            const li = document.createElement('li');
            li.textContent = `${name || 'Anonymous'}: ${message}`;
            wishesList.appendChild(li);
        });
    }

    // Save new wishes to Local Storage and update the list
    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (message.trim() === '') {
            alert('Message is required!');
            return;
        }

        wishes.push({ name: name || 'Anonymous', message });
        localStorage.setItem('wishes', JSON.stringify(wishes));
        updateWishList();
        wishForm.reset();
    });

    // Initialize the list on page load
    updateWishList();
});


