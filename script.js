//your code here!
const list = document.getElementById('infi-list');

// Function to add items to the list
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `List item ${i + 1}`;
        list.appendChild(li);
    }
}

// Add 10 items by default
addItems(10);

// Function to check if user has scrolled to the bottom
function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to handle scrolling
function handleScroll() {
    if (isAtBottom()) {
        // If at the bottom, add 2 more items
        addItems(2);
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
