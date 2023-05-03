<script lang="ts">
	import { todoColumnCards } from "../store/ColumnStore";
	export let showModal:boolean;
	let dialog:HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
    on:keydown|self={(e) => { if (e.key === 'Escape') dialog.close();}}
>
	<div on:click|stopPropagation
         on:keydown|self={(e) => { if (e.key === 'Escape') dialog.close();}}
    >
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>cancel</button>
	</div>
</dialog>

<style>
    dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
    @keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>