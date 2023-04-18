<script lang="ts">
	import type { CardData } from '../lib/Card';
	import { handleDragStart } from '../lib/DragAndDrop';
	export let card: CardData = {
		title: '',
		description: ''
	};
</script>

<div class="card" 
    draggable="true" 
    on:dragstart={(event) => handleDragStart(event, card)}>
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
