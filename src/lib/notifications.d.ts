type NotificationSet = {
  msg: string;
  timeout?: number;
  theme?: 'default' | 'warning' | 'alert' | 'success' | 'info' | string;
  className?: string;
  closeOnClick?: boolean;
};

export type Notification = {
  id: string;
  message: string;
  timeout: number;
  color: string;
  theme: string;
  className: string;
  closeOnClick: boolean;
};

declare const _default: {
  closeNotification: (id: string) => void;
  setTheme: (name: string, color: string) => void;
  subscribe: (this: void, run: import('svelte/store').Subscriber<Notification[]>, invalidate?: ((value?: unknown) => void) | undefined) => import('svelte/store').Unsubscriber;
  position: import('svelte/store').Writable<'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-center'>;
  set: (data: NotificationSet) => void;
};
export default _default;
