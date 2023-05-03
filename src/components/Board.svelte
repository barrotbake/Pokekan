<!-- 

@component Board

This component displays a Kanban board with three columns (`To Do`, `In Progress`, and `Done`), each containing a `Column` component.

## Child Components

- `Column` - A child component that displays a column of `Card` components.

## Stores

- `todoColumnCards`, `inProgressColumnCards`, `doneColumnCards` - Stores that contain an array of `CardData` objects for each column.
-->

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
