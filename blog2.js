const likeBtn = document.getElementById('like-btn-2');
const likeCount = document.getElementById('like-count-2');
let likes = localStorage.getItem('blog2_likes') || 0;

likeCount.textContent = `${likes} likes`;

likeBtn.addEventListener('click', () => {
    likes++;
    likeCount.textContent = `${likes} likes`;
    localStorage.setItem('blog2_likes', likes);
});

const field = document.querySelector('textarea');
const comments = document.getElementById('comments-2');

let comments_arr = [];

if (!localStorage.blog2_commentData) {
  localStorage.blog2_commentData = JSON.stringify([]);
} else {
  comments_arr = JSON.parse(localStorage.blog2_commentData);
}

const display_comments = () => {
  let list = '<ul>';
  comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

document.getElementById('commentForm-2').addEventListener('submit', function(event) {
  event.preventDefault();
  const content = field.value.trim();
  if (content.length > 0) { 
    comments_arr.push(content);
    localStorage.blog2_commentData = JSON.stringify(comments_arr);
    display_comments();
    field.value = '';
  }
});

display_comments();
