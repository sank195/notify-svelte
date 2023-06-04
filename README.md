# Notify-Svelte

Very simple and lightweight notifications widget for SvelteKit based on stores.

```bash
# installation
npm install notify-svelte
```

## Usage

Import Notifications component in your layout.svelte (or wherever you need notifications).

```bash
<script>
  import Notifications from 'notify-svelte';
</script>

<Notifications />
```

Use set method to show notification.

```bash
import {notify} from 'notify-svelte';

#simple-usage
notify.set('notification text', 2000);

#advanced-usage
notify.set('notification text', 2000, 'success', 'my-awesome-class');
```

### Parameters

```bash
set: (message: string, timeout: number, theme: "default" | "success" | "alert" | "info" | "warning", customClassName: string) => void
```