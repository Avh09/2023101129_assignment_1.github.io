const likeBtn = document.getElementById('like-btn-1');
const likeCount = document.getElementById('like-count-1');
let likes = localStorage.getItem('blog1_likes') || 0;

likeCount.textContent = `${likes} likes`;

likeBtn.addEventListener('click', () => {
    likes++;
    likeCount.textContent = `${likes} likes`;
    localStorage.setItem('blog1_likes', likes);
});

const field = document.querySelector('textarea');
const comments = document.getElementById('comments-1');

let comments_arr = [];

if (!localStorage.blog1_commentData) {
  localStorage.blog1_commentData = JSON.stringify([]);
} else {
  comments_arr = JSON.parse(localStorage.blog1_commentData);
}

const display_comments = () => {
  let list = '<ul>';
  comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

document.getElementById('commentForm-1').addEventListener('submit', function(event) {
  event.preventDefault();
  const content = field.value.trim();
  if (content.length > 0) { 
    comments_arr.push(content);
    localStorage.blog1_commentData = JSON.stringify(comments_arr);
    display_comments();
    field.value = '';
  }
});

display_comments();
