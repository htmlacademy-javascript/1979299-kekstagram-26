import {generatePhotos} from './data.js';
import {renderPhotos} from './draw-miniatures.js';
import './popup-upload.js';

const photos = generatePhotos();
renderPhotos(photos);

