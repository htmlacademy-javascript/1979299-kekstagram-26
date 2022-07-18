import {popupElement} from './popup-uploading.js';
import {closePopup} from './popup.js';
import {onSendingForm} from './messages.js';
import {unblockSubmitButton} from './form.js';
import {getPhotoArray} from './filter-list.js';
import constants from './constants.js';

const getData = (onSuccess, onError) => fetch(
  `${constants.API_DATA_URL}/data`,
  {
    method: 'GET',
    credentials: 'same-origin',
  }
)
  .then((response) => response.json())
  .then((data) => {
    getPhotoArray(data);
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

const FormResultsTypes = {SUCCESS: 'success', ERROR: 'error'};

const sendData = (formData) => fetch(
  constants.API_DATA_URL,
  {
    method: 'POST',
    body: formData,
  },
)
  .then((response) => {
    if (response.ok) {
      unblockSubmitButton();
      closePopup(popupElement);
      onSendingForm(FormResultsTypes.SUCCESS);
    } else {
      closePopup(popupElement);
      onSendingForm(FormResultsTypes.ERROR);
    }
  })
  .catch(() => {
    closePopup(popupElement);
    onSendingForm(FormResultsTypes.ERROR);
  });

export {getData, sendData};
