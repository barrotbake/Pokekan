<script lang="ts">
	import type { CardData } from '../lib/Card';
	import { handleDragStart } from '../lib/DragAndDrop';
	export let card: CardData = {
		title: '',
		description: '',
		type: '',
		id: 0
	};
	const decorationMap:Record<string,string> = {
		'normal': 'decoration',
		'great': 'decoration-great',
		'ultra': 'decoration-ultra'
	};
</script>

<div class="card" draggable="true" on:dragstart={(event) => handleDragStart(event, card)}>
	<div class={card.type}>
		<div class={decorationMap[card.type]}></div>
		<div class={decorationMap[card.type]}></div>
	</div>
	<h2>{card.title}</h2>
</div>

<style>
	.card {
		cursor: move;
		display: flex;
		flex-direction: column;
		min-height: 10em;
		background-color: #FFF;
		border-radius: 10px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin: 10px;
	}
	.card * {
		background-color: #FFF;
	}

	.card h2 {
		text-align: center;
	}

	.decoration {
		display: none;
	}
	.decoration-great {
		width: 15px;
		background-color: #E1656C;
		margin: 0 55px;
	}

	.decoration-ultra {
		width: 15px;
		background-color: #000000;
		margin: 0 55px;
	}

	.normal {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 37px;
		top: 0px;
		background: #E1656C;
		border-radius: 10px 10px 0px 0px;
	}

	.great {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 37px;
		top: 0px;
		background: #197AD3;
		border-radius: 10px 10px 0px 0px;
	}

	.ultra {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 37px;
		left: calc(50% - 252px/2);
		top: 0px;
		background: #DED851;
		border-radius: 10px 10px 0px 0px;
	}
</style>
