<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div id="back-button">
    <button on:click={() => dispatch("click")}>
        <svg width={20} height={20} viewBox="0 0 448 512"
            ><path
                d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
            /></svg
        > Voltar
    </button>
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    #back-button {
        position: absolute;
        top: 50;
        left: 50;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            color: $base-color;
            padding: 0.2rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            border-radius: 5px;
            transition: 0.2s;
            cursor: pointer;
            svg {
                fill: $base-color;
                margin-right: 0.5rem;
            }
            &:hover {
                background-color: $base-color;
                color: white;
                svg {
                    fill: white;
                }
            }
            border: 0;
        }
    }
</style>
