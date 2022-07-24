import {showElement, hideElement, isEscapeKey} from './util.js';

const MessageTypes = {SUCCESS: 'success', ERROR: 'error'};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    for (const index in MessageTypes) {
      const messageElement = document.querySelector(`.${MessageTypes[index]}`);
      if (!messageElement.classList.contains('hidden')) {
        hideElement(messageElement);
        document.removeEventListener('keydown', onPopupEscKeydown);
      }
    }
  }
};

const createMessageElement = (type) => {
  const templateElement = document
    .querySelector(`#${type}`)
    .content
    .querySelector(`.${type}`);

  const messageElement = templateElement.cloneNode(true);
  messageElement.classList.add('hidden');
  document.body.append(messageElement);

  const messageButtonElement = messageElement.querySelector('button');

  messageButtonElement.addEventListener('click', () => {
    if (type === MessageTypes.SUCCESS) {
      hideElement(messageElement);
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  });

  document.addEventListener('keydown', onPopupEscKeydown);
};

createMessageElement(MessageTypes.SUCCESS);
createMessageElement(MessageTypes.ERROR);

const onSendingForm = (type) => {
  const messageElement = document.querySelector(`.${type}`);
  showElement(messageElement);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideElement(messageElement);
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.success')) {
      hideElement(messageElement);
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.error')) {
      hideElement(messageElement);
    }
  });
};

export {onSendingForm};
