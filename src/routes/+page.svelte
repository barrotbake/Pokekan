<script lang="ts">
    import Board from "../components/Board.svelte";
    import PokeProfile from "../components/PokeProfile.svelte";
    import RegionNav from "../components/RegionNav.svelte";
    import TaskModal from "../components/TaskModal.svelte";
    let showModal:boolean = false;
</script>

<div class="main">
    <div class="side-bar">
        <PokeProfile/>
        <RegionNav/>
    </div>
    <Board />
    <TaskModal bind:showModal>
        <h1>Im the task modal</h1>
    </TaskModal>
</div>

<style>
    .main {
      display: flex;  
    }
</style>