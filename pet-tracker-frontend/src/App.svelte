<script lang="ts">
    import BackButton from "./components/BackButton.svelte";

    import Container from "./components/Container.svelte";
    import Footer from "./components/Footer.svelte";
    import WifiConnection from "./pages/wifi_connection/WifiConnection.svelte";
    import WifiSelector from "./pages/wifi_selector/WifiSelector.svelte";
    import type { INetwork } from "./pages/wifi_selector/WifiSelectorTypes";
    import initializeAmbientConfiguration from "./Development";
    import Login from "./pages/login/Login.svelte";
    import type { PetInfo } from "./pages/pet_data/PetDataTypes";
    import PetData from "./pages/pet_data/PetData.svelte";

    initializeAmbientConfiguration();

    let selected_network: INetwork | undefined = undefined;
    let pet_info: PetInfo | undefined = undefined;
    let step = 0;

    const onNetworkSelect = (event: CustomEvent<INetwork>) => {
        selected_network = event.detail;
        step++;
    };

    const onBack = () => {
        step--;
    };

    const onNetworkConnect = () => {
        step++;
    };
</script>

<div id="app">
    <Container>
        {#if step == 0}
            <WifiSelector on:select_network={onNetworkSelect} />
        {:else if step == 1}
            <BackButton on:click={onBack} />
            <WifiConnection selectedNetwork={selected_network} on:connect={onNetworkConnect} />
        {:else if step == 2}
            <BackButton on:click={onBack} />
            <PetData />
        {:else if step == 3}
            <BackButton on:click={onBack} />
            <Login />
        {/if}
    </Container>
    <Footer />
</div>

<style>
    #app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
