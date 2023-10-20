<script lang="ts">
    export let title: string | undefined = undefined;
    export let subtitle: string | undefined = undefined;
</script>

<div id="title">
    {#if title != undefined}
        <h1 class={subtitle ? "less-mb" : ""}>{title}</h1>
    {/if}
    {#if subtitle}
        <h2>{subtitle}</h2>
    {/if}
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    #title {
        width: 100%;
        h1 {
            font-size: 1.8em;
            text-align: left;
            margin-top: 1em;
            margin-bottom: 2em;
            color: $text-color-light;
        }
        .less-mb {
            margin-bottom: 0.5em;
        }
        h2 {
            font-size: 1.2rem;
            text-align: left;
            color: $text-color-light;
        }
    }
</style>
