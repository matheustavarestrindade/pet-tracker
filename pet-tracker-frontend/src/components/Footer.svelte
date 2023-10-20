<script lang="ts">
    import DogIcon from "./DogIcon.svelte";
</script>

<div class="footer">
    <div class="icon">
        <DogIcon />
    </div>
    <div class="description">Company Name</div>
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    .footer {
        padding: 1rem;
        display: flex;
        align-items: center;
        background-color: $base-color;
        color: white;
        .icon {
            width: 30px;
            height: 30px;
            margin-right: 1rem;
            fill: white;
        }
    }
</style>
