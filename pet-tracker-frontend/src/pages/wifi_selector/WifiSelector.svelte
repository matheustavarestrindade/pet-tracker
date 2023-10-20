<script lang="ts">
    import { createEventDispatcher, getContext, onDestroy } from "svelte";
    import Loader from "../../components/Loader.svelte";
    import Title from "../../components/Title.svelte";
    import Selector from "./Selector.svelte";
    import type { INetwork } from "./WifiSelectorTypes";
    const BASE_URL = getContext("BASE_URL");
    const REQUEST_TIME_MS: number = getContext("REQUEST_TIME_MS");
    const onNetworkSelect = createEventDispatcher<{ select_network: INetwork }>();
    let networks = [];

    const handleNetworksQuery = async () => {
        try {
            const response = await fetch(BASE_URL + "/query_networks");
            const jsonResponse = await response.json();
            networks = jsonResponse.networks;
        } catch (error) {
            console.error("Cannot query networks");
        }
    };

    const interval = setInterval(handleNetworksQuery, REQUEST_TIME_MS);
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div id="wifi-selector">
    <Title title={"Selecione uma rede Wifi para configurar seu Pet-tracker"} />
    {#if networks.length == 0}
        <Loader loadingText="Procurando redes..." />
    {:else}
        <Selector on:select_network={(e) => onNetworkSelect("select_network", e.detail)} {networks} />
    {/if}
</div>

<style lang="scss">
    #wifi-selector {
        align-self: stretch;
        display: flex;
        flex-direction: column;
    }
</style>
