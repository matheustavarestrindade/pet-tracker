<div class="container">
    <slot />
</div>

<style>
    .container {
        flex-grow: 1;
        max-width: 90%;
        min-width: 90%;
        margin: 0 auto;
        padding: 1em;
        display: flex;
        flex-direction: row;
    }
</style>
