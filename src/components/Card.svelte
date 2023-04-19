<!-- 
@component Card

This component displays a card with a title and description that can be dragged and dropped using the HTML5 drag and drop API.

## Props

- `card: CardData` - A `CardData` object that contains the title and description of the card.

## Event Handlers

- `on:dragstart` - Calls the `handleDragStart` function and passes in the `event` object and the `card` prop.

## Styling

- `.card` - Applies basic styling to the card, including setting the cursor to `move`, adding a border, and setting a minimum height.
-->

<script lang="ts">
	import type { CardData } from '../lib/Card';
	import { handleDragStart } from '../lib/DragAndDrop';
	export let card: CardData = {
		title: '',
		description: ''
	};
</script>

<div class="card" draggable="true" on:dragstart={(event) => handleDragStart(event, card)}>
	<h1>{card.title}</h1>
	<p>{card.description}</p>
</div>

<style>
	.card {
		cursor: move;
		display: flex;
		flex-direction: column;
		min-height: 15em;
		border: 1px solid black;
		border-radius: 5px;
		padding: 10px;
	}
</style>
