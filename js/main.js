import {generatePhotos} from './data.js';
import {renderPhotos} from './draw-miniatures.js';

const photos = generatePhotos();
renderPhotos(photos);
