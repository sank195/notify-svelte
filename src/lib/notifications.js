import {writable, derived} from 'svelte/store';

const id = () => {
  return '_' + Math.random().toString(36).substring(2, 9);
};

const notifyStore = () => {
  const notifications = writable([]);
  const position = writable('top-right');

  const colors = {
    default: 'linear-gradient(90deg, #00C086 0%, #343D8C 100%)',
    alert: '#CE3B3B',
    success: '#06AD79',
    info: '#DBDFFF',
    warning: '#FFCC00'
  };

  const setTheme = (name, color) => {
    colors[name] = color;
  };

  const closeNotification = (id) => {
    notifications.update((state) => {
      return state.filter((el) => el.id !== id);
    });
  };

  const send = (message, timeout, color, className, closeOnClick) => {
    notifications.update((state) => {
      return [...state, {id: id(), message, timeout, color: colors[color], theme: color, className, closeOnClick}];
    });
  };

  const notificationsSet = derived(notifications, ($notifications, set) => {
    set($notifications);
    if ($notifications.length > 0) {
      const timer = setTimeout(() => {
        notifications.update((state) => {
          state.shift();
          return state;
        });
      }, $notifications[0].timeout);
      return () => {
        clearTimeout(timer);
      };
    }
  });

  const {subscribe} = notificationsSet;

  return {
    closeNotification,
    setTheme,
    subscribe,
    position,
    set: ({msg, timeout = 2000, theme = 'default', className = '', closeOnClick = true}) => send(msg, timeout, theme, className, closeOnClick)
  };
};

export default notifyStore();
