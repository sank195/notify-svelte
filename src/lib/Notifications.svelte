<script lang="ts">
  import {flip} from 'svelte/animate';
  import {fly} from 'svelte/transition';
  import notifications from './notifications.js';

  const pos = notifications.position;
  const elDelete = (notification: {id: string; message: string; timeout: number; color: string; theme: string; className: string; closeOnClick: boolean}) => {
    if (notification?.closeOnClick) {
      notifications.closeNotification(notification.id);
    }
  };
</script>

{#if $notifications.length}
  <div class="notifications {$pos || 'top-right'}">
    {#each $notifications as notification (notification.id)}
      <div
        animate:flip
        class="toast {notification.theme} {notification.className}"
        style="background: {notification.color};"
        transition:fly={{y: 30}}
        on:click={() => elDelete(notification)}
        on:keypress
      >
        <div class="content">{notification.message}</div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .notifications {
    position: fixed;
    margin: 0 auto;
    padding: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .notifications.top-right {
    top: 10px;
    right: 10px;
    align-items: flex-end;
  }
  .notifications.top-left {
    top: 10px;
    left: 10px;
    align-items: flex-start;
  }
  .notifications.top-center {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
  }
  .notifications.bottom-left {
    bottom: 10px;
    left: 10px;
    align-items: flex-start;
  }
  .notifications.bottom-right {
    bottom: 10px;
    right: 10px;
    align-items: flex-end;
  }
  .notifications.bottom-center {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
  }
  .toast {
    flex: 0 0 auto;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .content {
    padding: 15px 20px;
    display: block;
    color: white;
    font-family: inherit;
  }
</style>
