import {hideElement, showElement} from './util.js';
import constants from './constants.js';

const listContainerElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();

const countElement = document.querySelector('.social__comment-count');
const countTotalElement = countElement.querySelector('.comments-count');
const loaderElememt = document.querySelector('.social__comments-loader');
const countCurrentElement = countElement.querySelector('.showed-comments-count');

let allComments;
let hiddenComments;

const renderCommentsList = (comments) => {
  comments.forEach((comment) => {
    const newComment = commentElement.cloneNode(true);

    const newCommentItemAuthor = newComment.querySelector('.social__picture');
    newCommentItemAuthor.src = comment.avatar;
    newCommentItemAuthor.alt = comment.name;

    newComment.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(newComment);
  });

  listContainerElement.appendChild(commentsFragment);
};

const checkCommentListLength = (comments) => {
  if (comments.length > constants.LIMITED_NUMBER_COMMENTS) {
    showElement(countElement);
    showElement(loaderElememt);

    countTotalElement.textContent = allComments.length;
    countCurrentElement.textContent = Number(countCurrentElement.textContent) + constants.LIMITED_NUMBER_COMMENTS;

    const commentList = comments.slice(0, constants.LIMITED_NUMBER_COMMENTS);
    renderCommentsList(commentList);
  } else {
    renderCommentsList(comments);
    hideElement(countElement);
    hideElement(loaderElememt);
  }
};

const onLoadButtonClick = () => {
  const showedComments = document.querySelectorAll('.social__comment');
  const showedCommentCount = showedComments.length;

  hiddenComments = allComments.slice(showedCommentCount, allComments.length);
  checkCommentListLength(hiddenComments);
};

loaderElememt.addEventListener('click', onLoadButtonClick);

const clearCommentsList = () => {
  listContainerElement.innerHTML = '';
};

const getAllComments = (comments) => {
  clearCommentsList();
  countCurrentElement.textContent = 0;

  allComments = comments;
  checkCommentListLength(allComments);
};

export {clearCommentsList, getAllComments, checkCommentListLength};

