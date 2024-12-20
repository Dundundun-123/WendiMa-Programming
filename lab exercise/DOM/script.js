// script.js
const API_KEY = "<47719229-126f3bcdbc68681f2e2689c8e>";
const BASE_URL = "https://pixabay.com/api/";

document.getElementById("search-button").addEventListener("click", async () => {
  const query = document.getElementById("search-input").value;
  if (!query) {
    alert("Please enter key words!");
    return;
  }

  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayResults(data.hits);
  } catch (error) {
    console.error("Error fetching images:", error);
    alert("Failed to get image, please try again later!");
  }
});

function displayResults(images) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (images.length === 0) {
    resultsDiv.innerHTML = "<p>Failed to get image</p>";
    return;
  }

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;
    resultsDiv.appendChild(img);
  });
}
