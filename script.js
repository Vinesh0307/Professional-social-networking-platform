// Load data from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
});

// Function to create a new post
function createPost() {
  const postTitle = document.getElementById('postTitle').value.trim();
  const postContent = document.getElementById('postContent').value.trim();

  if (!postTitle || !postContent) {
    alert('Please enter a title and content for your post.');
    return;
  }

  // Create a post object
  const post = {
    title: postTitle,
    content: postContent,
    timestamp: new Date().toLocaleString(),
  };

  // Save to localStorage
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.unshift(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  // Clear form inputs
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';

  // Reload posts in the feed
  loadPosts();
}

// Function to load posts from localStorage
function loadPosts() {
  const feed = document.getElementById('feed');
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  feed.innerHTML = ''; // Clear the current feed

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('feed-item');

    postElement.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.content}</p>
      <small>Posted on: ${post.timestamp}</small>
    `;

    feed.appendChild(postElement);
  });
}
