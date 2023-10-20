<script lang="ts">
    import type { INetwork } from "./WifiSelectorTypes";
    import { createEventDispatcher } from "svelte";
    export let networks: INetwork[] = [];
    const onNetworkSelect = createEventDispatcher<{ select_network: INetwork }>();
</script>

<div id="networks">
    {#each networks as network}
        <div class="network" on:click={() => onNetworkSelect("select_network", network)}>
            <div class="ssid">{network.ssid}</div>
            <div class="icons">
                <div class="signal-icon {network.rssi >= -50 ? 'strong' : network.rssi >= -70 ? 'medium' : 'weak'}">
                    <div class="signal-bar" />
                    <div class="signal-bar" />
                    <div class="signal-bar" />
                </div>
                <div class="password">
                    {#if network.has_password}
                        <svg width={18} height={18} viewBox="0 0 448 512"
                            ><path
                                d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                            /></svg
                        >
                    {:else}
                        <svg width={18} height={18} viewBox="0 0 576 512"
                            ><path
                                d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"
                            /></svg
                        >
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../../styles/colors.scss";

    .icons {
        display: flex;
        align-items: center;
        .password {
            margin-left: 0.5rem;
            fill: $text-color-light;
        }
    }
    .signal-icon {
        height: 18px;
        width: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        .signal-bar {
            width: 4px;
            opacity: 30%;
            background: $base-color;
            &:nth-child(1) {
                height: 40%;
            }
            &:nth-child(2) {
                height: 70%;
            }
            &:nth-child(3) {
                height: 100%;
            }
        }
        &.weak {
            .signal-bar {
                &:nth-child(1) {
                    opacity: 100%;
                }
            }
        }
        &.medium {
            .signal-bar {
                &:nth-child(1) {
                    opacity: 100%;
                }
                &:nth-child(2) {
                    opacity: 100%;
                }
            }
        }
        &.strong {
            .signal-bar {
                &:nth-child(1) {
                    opacity: 100%;
                }
                &:nth-child(2) {
                    opacity: 100%;
                }
                &:nth-child(3) {
                    opacity: 100%;
                }
            }
        }
    }
    #networks {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding-right: 0.5rem;
        &::-webkit-scrollbar {
            width: 10px;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: $text-color-light;
        }
    }

    .network {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
        transition: 0.2s;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
</style>
