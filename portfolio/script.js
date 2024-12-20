// open the modal and display the clicked image
function openModal(img) {
    const modal = document.getElementById("myModal"); 
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01"); 
    modal.style.display = "none";
    modalImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
}

// get the unique project ID from the HTML element's data-project-id attribute
const projectId = document.getElementById('comments-section').getAttribute('data-project-id');
const key = `comments_${projectId}`;

// Get the comments from localStorage for this project
let comments = JSON.parse(localStorage.getItem(key)) || [];

// Load existing comments from localStorage when the page loads
window.addEventListener("load", function() {
    loadComments();

    // Project comment submission event listener
    document.getElementById("submit-comment").addEventListener("click", function() {
        const commentInput = document.getElementById("comment-input");
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Add the new comment to the beginning of the array
            comments.unshift(commentText);

            // Keep only the latest 5 comments
            if (comments.length > 5) {
                comments.pop(); // Remove the oldest comment
            }

            // Save the updated comments back to localStorage
            localStorage.setItem(key, JSON.stringify(comments));

            // Clear the input field
            commentInput.value = "";

            // Reload comments to update the list
            loadComments();
        } else {
            alert("Please enter a comment!");
        }
    });
});

// Load comments from localStorage and display them
function loadComments() {
    const commentList = document.getElementById("comment-list");

    // Clear the current comments in the list
    commentList.innerHTML = "";

    // Add each comment to the list
    comments.forEach(commentText => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.textContent = commentText;
        commentList.appendChild(commentElement);
    });
}

// Sort portfolio items based on selected criteria
function sortPortfolio(criteria) {
    const portfolioItems = document.querySelectorAll('.portfolio');
    const itemsArray = Array.from(portfolioItems);

    itemsArray.sort((a, b) => {
        let aValue = parseFloat(a.getAttribute(`data-${criteria}`));
        let bValue = parseFloat(b.getAttribute(`data-${criteria}`));
        
        if (criteria === 'date') {
            const aDate = new Date(a.getAttribute('data-date'));
            const bDate = new Date(b.getAttribute('data-date'));
            return aDate - bDate;
        }
        
        return bValue - aValue; // Descending order for other criteria
    });

    // Reorder the portfolio section based on sorted items
    const portfolioSection = document.querySelector('.portfolio-section');
    itemsArray.forEach(item => {
        portfolioSection.appendChild(item);
    });
}

