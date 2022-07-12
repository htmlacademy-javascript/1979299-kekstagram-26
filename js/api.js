import {popupElement} from './popup-uploading.js';
import {closePopup} from './popup.js';
import {onSendingForm} from './messages.js';
import {unblockSubmitButton} from './form.js';
import constants from './constants.js';

const getData = (onSuccess, onError) => fetch(
  constants.API_GETDATA_URL,
  {
    method: 'GET',
    credentials: 'same-origin',
  }
)
  .then((response) => response.json())
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

export {getData};

const sendData = (formData) => fetch(
  constants.API_SENDDATA_URL,
  {
    method: 'POST',
    body: formData,
  },
)
  .then((response) => {
    if (response.ok) {
      unblockSubmitButton();
      closePopup(popupElement);
      onSendingForm('success');
    } else {
      closePopup(popupElement);
      onSendingForm('error');
    }
  })
  .catch(() => {
    closePopup(popupElement);
    onSendingForm('error');
  });

export {sendData};
