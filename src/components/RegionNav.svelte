<script lang="ts">
     export let boardList: Array<String> = [
        "Kanto",
        "Johto",
        "Hoenn",
     ];
     let activeRegion: String = "Kanto";
</script>
<div class="region-container">
   <div class="add-region-container">
       <h1>Regions</h1>
       <button>+</button>
   </div>
   {#each boardList as board}
    {#if board == activeRegion}
        <div class="region-list-item">
            <img src="../activeRegion.svg" alt="">
            <p style="font-weight: bold; color: #6C3D1B">{board}</p>
        </div>
    {:else}
        <div class="region-list-item">
            <div class="inactive"></div>
            <p>{board}</p>
        </div>
    {/if}
    {/each}
</div>  
<style lang="scss">
    .region-container {
        border-right: 5px solid #D5A786;
        border-top: 2.5px solid #D5A786;
        min-height: 100%;
    }
    .add-region-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 15px;
        button {
            font-size: larger;
            font-weight: bold;
            border: none;
        }
    }
    .region-list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
        width: auto;
        font-weight: 600;
        img {
            margin-right: 1.5em;
        }
        .inactive {
            width: 27px;
            height: 28px;
            background-color: #AA988A;
            margin-right: 1.5em;
        }
    }
</style>