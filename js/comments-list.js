import {hideElement} from './util.js';

const listContainerElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();

const countElement = document.querySelector('.social__comment-count');
const countTotalElement = countElement.querySelector('.comments-count');

const loaderElememt = document.querySelector('.social__comments-loader');

const renderCommentsList = (comments) => {
  comments.forEach((comment) => {
    const newComment = commentElement.cloneNode(true);

    const newCommentItemAuthor = newComment.querySelector('.social__picture');
    newCommentItemAuthor.src = comment.avatar;
    newCommentItemAuthor.alt = comment.name;

    newComment.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(newComment);
  });

  countTotalElement.textContent = comments.length;
  hideElement(countElement);
  hideElement(loaderElememt);

  listContainerElement.innerHTML = '';
  listContainerElement.appendChild(commentsFragment);
};

const clearCommentsList = () => {
  listContainerElement.innerHTML = '';
};

export {renderCommentsList, clearCommentsList};

