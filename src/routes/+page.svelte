<script lang="ts">
	import Board from '../components/Board.svelte';
	import PokeProfile from '../components/PokeProfile.svelte';
	import RegionNav from '../components/RegionNav.svelte';
	import TaskModal from '../components/TaskModal.svelte';
	import { todoColumnCards } from '../store/ColumnStore';
	import type { CardData } from '../lib/Card';
	let showModal: boolean = false;

	const getTaskItem = () => {
		let inputElement = document.querySelector('input[name=task-name]') as HTMLInputElement;
		let selectElement = document.querySelector('select[name=task-type]') as HTMLSelectElement;
		let taskTitle = inputElement.value;
		let taskType = selectElement.value;
		return {
			title: taskTitle,
			description: 'test',
			type: taskType
		};
	};

	const addTask = () => {
		let inputElement = document.querySelector('input[name=task-name]') as HTMLInputElement;
		let selectElement = document.querySelector('select[name=task-type]') as HTMLSelectElement;
		let taskItem: CardData = getTaskItem();
		todoColumnCards.update((cards) => {
			cards.push(taskItem);
			return cards;
		});
		showModal = false;
		//clear input
		inputElement.value = '';
		selectElement.value = 'normal';
	};
</script>

<div class="main">
	<div class="side-bar">
		<PokeProfile />
		<RegionNav />
	</div>
	<div>
		<h1>Sinnoh Task</h1>
		<Board />
		<TaskModal bind:showModal>
			<form>
				<label for="task-name">Task Name</label>
				<input type="text" id="task-name" name="task-name" />
				<select name="task-type">
					<option value="normal">Normal</option>
					<option value="great">Great</option>
					<option value="ultra">Ultra</option>
				</select>
			</form>
			<button on:click={() => addTask()} type="submit">Submit</button>
		</TaskModal>
	</div>
</div>
<div class="button-box">
	<button class="add-btn" on:click={() => (showModal = true)}>
		<h3>Add Task</h3>
		<img src="../pokeicon.png" alt="pokeball icon" />
	</button>
</div>

<style>
	.main {
		display: flex;
	}
	.button-box {
		width: 85%;
		display: flex;
		justify-content: end;
	}

	.add-btn {
		display: flex;
		min-width: 150px;
		height: 50px;
		align-items: center;
		justify-content: space-evenly;
		color: white;
		background-color: #e1656c;
		border: none;
		border-radius: 40px;
		margin: 10px;
	}
	.add-btn img {
		width: 35px;
		height: 35px;
		margin-left: 3px;
	}
	.add-btn * {
		background-color: #e1656c;
	}
</style>
