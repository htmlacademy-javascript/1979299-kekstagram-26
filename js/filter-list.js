import {renderPictureList} from './draw-miniatures.js';
import {shuffleArray, debounce} from './util.js';
import constants from './constants.js';

const ACTIVE_FILTER_BUTTON = 'img-filters__button--active';

const filterContainerElement = document.querySelector('.img-filters');
const filterListElement = document.querySelector('.img-filters__form');
const filterButtonsElement = document.querySelectorAll('.img-filters__button');

const FilterTypes = {DEFAULT: 'filter-default', RANDOM: 'filter-random', DISCUSSED: 'filter-discussed'};

let photos = {};

const showFilter = () => {
  filterContainerElement.classList.remove('img-filters--inactive');
};

const getPhotoArray = (data) => {
  photos = data;
  showFilter();
};

const compareLikesCount = (picture1, picture2) => picture1.likes - picture2.likes;

const applyDefaultFilter = () => {
  renderPictureList(photos);
};

const applyRandomFilter = () => {
  const copyArray = photos.slice();
  shuffleArray(copyArray);
  renderPictureList(copyArray.slice(photos.length - constants.RANDOM_PHOTO_COUNT));
};

const applyDiscussedFilter = () => {
  const copyArray = photos.slice().sort(compareLikesCount);
  renderPictureList(copyArray);
};

const onFilterButtonClick = (currentFilterType) => {
  switch(currentFilterType) {
    case FilterTypes.DEFAULT:
      applyDefaultFilter();
      break;
    case FilterTypes.RANDOM:
      applyRandomFilter();
      break;
    case FilterTypes.DISCUSSED:
      applyDiscussedFilter();
      break;
  }
};

filterListElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    filterButtonsElement.forEach((filterButton) => {
      if (filterButton.classList.contains(ACTIVE_FILTER_BUTTON)) {
        filterButton.classList.remove(ACTIVE_FILTER_BUTTON);
      }
      filterButton.disabled = false;
    });

    const activeFilterButton = evt.target;
    activeFilterButton.disabled = true;

    activeFilterButton.classList.add(ACTIVE_FILTER_BUTTON);
    const currentFilterType = activeFilterButton.id;

    debounce(
      () => onFilterButtonClick(currentFilterType),
      constants.DRAW_DELAY,
    );
  }
});

export {showFilter, getPhotoArray};
