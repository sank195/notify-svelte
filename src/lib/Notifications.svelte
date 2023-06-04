<script>
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import notifications from './notifications';
</script>

<div class="notifications">
	{#each $notifications as notification (notification.id)}
		<div
			animate:flip
			class="toast {notification.theme} {notification.className}"
			style="background: {notification.color};"
			transition:fly={{ y: 30 }}
		>
			<div class="content">{notification.message}</div>
		</div>
	{/each}
</div>

<style>
	.notifications {
		position: fixed;
		top: 10px;
		left: 10px;
		right: 10px;
		margin: 0 auto;
		padding: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		pointer-events: none;
	}
	.toast {
		flex: 0 0 auto;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	.content {
		padding: 15px 20px;
		display: block;
		color: white;
		font-weight: 600;
	}
</style>
