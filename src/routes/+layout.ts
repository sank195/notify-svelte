import {notify} from 'pixel-notify';

export const load = () => {
  notify.setTheme('layoutLoad', '#999');
  notify.position.set('top-right');
};
