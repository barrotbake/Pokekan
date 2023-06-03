<script lang="ts">
	import Column from './Column.svelte';
	import { todoColumnCards, inProgressColumnCards, doneColumnCards } from '../store/ColumnStore';
	import type { ColumnData } from '../lib/Column';

	let todoColumnInfo: ColumnData;
	let inProgressColumnInfo: ColumnData;
	let doneColumnInfo: ColumnData;

	// Reactive statements
	$: todoColumnInfo = {
		title: 'Todo',
		cards: $todoColumnCards
	};
	$: inProgressColumnInfo = {
		title: 'In Progress',
		cards: $inProgressColumnCards
	};
	$: doneColumnInfo = {
		title: 'Done',
		cards: $doneColumnCards
	};
</script>

<div class="board">
	<Column column={todoColumnInfo} />
	<Column column={inProgressColumnInfo} />
	<Column column={doneColumnInfo} />
</div>

<style>
	.board {
		display: flex;
		flex-direction: row;
	}
</style>
