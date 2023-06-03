<script lang="ts">
	import type { ColumnData } from '../lib/Column';
	import { handleDragOver, handleDrop } from '../lib/DragAndDrop';
	import { dragItem } from '../store/DragStore';
	import Card from './Card.svelte';
	export let column: ColumnData;
</script>

<div
	class="column drop-target {column.title}"
	on:dragover={handleDragOver}
	on:drop={(event) => handleDrop(event, $dragItem)}
>
	<h1>{column.title}</h1>
	{#each column.cards as card}
		<Card {card} />
	{/each}
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		width: 300px;
		min-height: 600px;
		padding: 10px;
	}
	.column h1 {
		text-align: center;
		color: #6C3D1B;
	}	
</style>
