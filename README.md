# Notify-Svelte

Very simple and lightweight notifications widget for SvelteKit based on stores. Fully Typed.

```bash
# installation
npm install pixel-notify
```

## Usage

Import Notifications component in your layout.svelte (or wherever you need notifications).

```bash
<script>
  import Notifications from 'pixel-notify';
</script>

<Notifications />
```

Use set method to show notification. Also, you can add custom theme, or change default theme color. To do it globally you may call setTheme in layout load function or in layout.svelte.

```bash
import {notify} from 'pixel-notify';

#simple-usage
notify.set({msg: 'notification text'});

#advanced-usage
notify.set({msg: 'notification text', timeout: 2000, theme: 'warning', className: 'my-awesome-class', closeOnClick: false});

#add your theme
notify.setTheme('my-theme',  '#999');
notify.set({msg: 'This is my theme!', theme: 'my-theme'});

#change position
notify.position.set('top-center');
```

### Methods and typings

```bash
set: ({msg: string, timeout: number, theme: "default" | "success" | "alert" | "info" | "warning", className: string, closeOnClick: boolean}) => void
setTheme: (name: string, color: string) => void
position.set: (pos: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right") => void
```
