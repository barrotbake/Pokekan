<script lang="ts">
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
		<button autofocus on:click={() => dialog.close()}>close modal</button>
	</div>
</dialog>