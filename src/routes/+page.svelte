<script>
    import Board from "../components/Board.svelte";
    import PokeProfile from "../components/PokeProfile.svelte";
    import RegionNav from "../components/RegionNav.svelte";
</script>

<div class="main">
    <div class="side-bar">
        <PokeProfile/>
        <RegionNav/>
    </div>
    <Board />
</div>

<style>
    .main {
      display: flex;  
    }
</style>