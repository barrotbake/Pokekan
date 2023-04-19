<script lang="ts">
	import type { ColumnData } from '../lib/Column';
	import { handleDragOver, handleDrop } from '../lib/DragAndDrop';
	import { dragItem } from '../store/DragStore';
	import type { CardData } from '../lib/Card';
	import Card from './Card.svelte';
	export let column: ColumnData;
	// Reactive statements
	let dragCard: CardData;
	dragItem.subscribe((value) => (dragCard = value));
</script>

<div
	class="column drop-target {column.title}"
	on:dragover={handleDragOver}
	on:drop={(event) => handleDrop(event, dragCard)}
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
		height: 100em;
		border: 1px solid black;
		border-radius: 5px;
		padding: 10px;
	}
</style>
