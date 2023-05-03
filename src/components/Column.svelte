<!-- 
@component CardColumn

This component displays a column of `Card` components that can be dragged and dropped using the HTML5 drag and drop API.

## Props

- `column: ColumnData` - A `ColumnData` object that contains the title and cards of the column.

## Reactive Statements

- `dragCard: CardData` - A reactive statement that updates the `dragCard` variable whenever the `dragItem` store changes.

## Event Handlers

- `on:dragover` - Calls the `handleDragOver` function to handle dragover events on the column element.
- `on:drop` - Calls the `handleDrop` function to handle drop events on the column element.

## Child Components
- `Card` - A child component that displays a single card.
-->
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
		min-height: 600px;
		padding: 10px;
	}
	.column h1 {
		text-align: center;
		color: #6C3D1B;
	}	
</style>
