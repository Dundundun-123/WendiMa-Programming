// Function to check if the data is expired
function isExpired() {
    const expirationTime = localStorage.getItem('expirationTime');
    return !expirationTime || new Date().getTime() > expirationTime;
}

// Initialize or reset the click count if expired
if (isExpired()) {
    localStorage.setItem('clickCount', 0);  // Reset click count
    localStorage.setItem('expirationTime', new Date().getTime() + 24 * 60 * 60 * 1000); // Set expiration time to 24 hours
}

// Retrieve the stored click count
let count = localStorage.getItem('clickCount') || 0;

// Update the displayed count
document.getElementById('clickCount').textContent = count;

// Add event listener for the button click
document.getElementById('clickButton').addEventListener('click', function() {
    count++;  // Increment the count
    localStorage.setItem('clickCount', count); // Store the new count in localStorage
    document.getElementById('clickCount').textContent = count; // Update the displayed count
});
