<script lang="ts">
  import Notifications from 'pixel-notify';
</script>

<div class="wrapper">
  <div class="container">
    <Notifications />
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .container {
    max-width: 720px;
    padding: 15px 0;
  }
</style>
