<script lang="ts">
  import {notify} from '../lib/index.js';

  notify.setTheme('custom', '#FB532A');

  const examplesList = {
    defaultTheme: () => notify.set({msg: 'I am Default'}),
    alert: () => notify.set({msg: 'I am Alert', theme: 'alert'}),
    success: () => notify.set({msg: 'I am success', theme: 'success'}),
    info: () => notify.set({msg: 'I am Info. You cant close me by click', theme: 'info', closeOnClick: false}),
    warning: () => notify.set({msg: 'I am warning but with class hello-world and timeout 7s', theme: 'warning', className: 'hello-world', timeout: 7000}),
    custom: () => notify.set({msg: 'I am Custom', theme: 'custom'}),
    layout: () => notify.set({msg: 'I am created in layout load', theme: 'layoutLoad'})
  };
</script>

<div class="buttons">
  <button class="btn success" on:click={() => examplesList.success()}>success</button>
  <button class="btn warning" on:click={() => examplesList.warning()}>warning (custom class and timeout 7s)</button>
  <button class="btn custom" on:click={() => examplesList.custom()}>custom theme</button>
  <button class="btn custom" on:click={() => examplesList.layout()}>theme created in layout load</button>
  <button class="btn info" on:click={() => examplesList.info()}>info (close on click deactivated)</button>
  <button class="btn alert" on:click={() => examplesList.alert()}>alert</button>
  <button class="btn default" on:click={() => examplesList.defaultTheme()}>default</button>
</div>
