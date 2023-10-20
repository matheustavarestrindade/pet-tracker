<script lang="ts">
    import DogIcon from "./DogIcon.svelte";
    export let loadingText: string | undefined = "Carregando...";
</script>

<div id="loading-overlay">
    <div class="loader" />
    <div id="icon">
        <DogIcon />
    </div>
    <div id="text">
        {loadingText}
    </div>
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    #loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        #icon {
            position: absolute;
            width: 60px;
            height: 60px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            fill: white;
        }
        #text {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.2em;
            text-align: center;
        }
        .loader {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: linear-gradient(45deg, transparent, transparent 40%, $base-color);
            animation: animate 2s linear infinite;

            &::before {
                content: "";
                position: absolute;
                top: 6px;
                left: 6px;
                bottom: 6px;
                right: 6px;
                background: $base-color-mute;
                border-radius: 50%;
                z-index: 1000;
            }

            &::after {
                content: "";
                position: absolute;
                top: 0px;
                left: 0px;
                bottom: 0px;
                right: 0px;
                background: linear-gradient(45deg, transparent, transparent 40%, $base-color);
                border-radius: 50%;
                filter: blur(60px);
                z-index: 1;
            }
        }

        @keyframes animate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>
