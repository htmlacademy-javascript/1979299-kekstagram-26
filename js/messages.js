import {showElement, hideElement} from './util.js';
import {isEscapeKey} from './util.js';

const MessageTypes = { SUCCESS: 'success', ERROR: 'error' };

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
  const template = document
    .querySelector(`#${type}`)
    .content
    .querySelector(`.${type}`);

  const messageElement = template.cloneNode(true);
  messageElement.classList.add('hidden');
  document.body.append(messageElement);

  const messageButton = messageElement.querySelector('button');

  messageButton.addEventListener('click', () => {
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
};

export {onSendingForm};
