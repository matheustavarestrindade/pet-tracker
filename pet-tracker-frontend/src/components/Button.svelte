<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<button id="button" on:click={() => dispatch("click")}><slot /></button>

<style lang="scss">
    @import "../styles/colors.scss";
    #button {
        width: 100%;
        height: 50px;
        background-color: $base-color;
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        transition: 0.2s;
        &:hover {
            background-color: $base-color-light;
        }
    }
</style>
