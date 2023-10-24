document.addEventListener('DOMContentLoaded', () =>{
    
// Select DOM elements
const apodImage = document.getElementById('apod-image');
const apodTitle = document.getElementById('apod-title');
const apodExplanation = document.getElementById('apod-explanation');
const apodDate = document.getElementById('apod-date');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Fetch Astronomy Picture of the Day from API
fetch('https://api.nasa.gov/planetary/apod?api_key=neIf881jkrVVBuY8LMMlAKE1DgCukaoc0JS6GZoU')
  .then(response => response.json())
  .then(data => {

    // Set image source, title, explanation and date
    apodImage.src = data.hdurl;
    apodTitle.textContent = data.title;
    apodExplanation.textContent = data.explanation;
    apodDate.textContent = data.date;
  })
  .catch(error => console.error(error));

  // Add event listener to like button
likeButton.addEventListener('click', () => {
  let count = parseInt(likeCount.textContent);
  count++;
  likeCount.textContent = count;
});

// Add event listener to comment form
commentForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  if (name && comment) {
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `<strong>${name}</strong>: ${comment}`;
    commentList.appendChild(commentItem);
    nameInput.value = '';
    commentInput.value = '';
  }
});

})
