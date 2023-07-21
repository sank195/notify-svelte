import {notify} from '../lib/index.js';

export const load = () => {
  notify.setTheme('layoutLoad', '#999');
  notify.position.set('top-right');
};
