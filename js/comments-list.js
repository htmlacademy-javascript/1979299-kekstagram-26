const commentsContainer = document.querySelector('.social__comments');
const commentsItem = document.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();

const commentsCount = document.querySelector('.social__comment-count');
const commentsCountTotal = commentsCount.querySelector('.comments-count');

const commentsLoader = document.querySelector('.social__comments-loader');

const renderCommentsList = (comments) => {
  comments.forEach((comment) => {
    const newCommentItem = commentsItem.cloneNode(true);

    const newCommentItemAuthor = newCommentItem.querySelector('.social__picture');
    newCommentItemAuthor.src = comment.avatar;
    newCommentItemAuthor.alt = comment.name;

    newCommentItem.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(newCommentItem);
  });

  commentsCountTotal.textContent = comments.length;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(commentsFragment);
};

const clearCommentsList = () => {
  commentsContainer.innerHTML = '';
};

export {renderCommentsList, clearCommentsList};

