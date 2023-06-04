import { writable, derived } from 'svelte/store';
const id = () => {
	return '_' + Math.random().toString(36).substring(2, 9);
};

const createNotificationStore = () => {
	const notifications = writable([]);

	let colors = {
		default: 'linear-gradient(90deg, #00C086 0%, #343D8C 100%)',
		alert: '#CE3B3B',
		success: '#06AD79',
		info: '#DBDFFF',
		warning: '#FFCC00'
	};

	const send = (message, timeout, color, className) => {
		notifications.update((state) => {
			return [
				...state,
				{ id: id(), message, timeout, color: colors[color], theme: color, className }
			];
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

	const { subscribe } = notificationsSet;

	return {
		subscribe,
		set: (msg, timeout, theme = 'default', className = '') => send(msg, timeout, theme, className)
	};
};

export default createNotificationStore();
