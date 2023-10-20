<script lang="ts">
    import { getContext, createEventDispatcher, onDestroy } from "svelte";
    import Button from "../../components/Button.svelte";
    import Input from "../../components/Input.svelte";
    import Loader from "../../components/Loader.svelte";
    import Title from "../../components/Title.svelte";
    import type { INetwork } from "../wifi_selector/WifiSelectorTypes";
    export let selectedNetwork: INetwork;

    const onConnect = createEventDispatcher();

    const BASE_URL = getContext("BASE_URL");

    let trailing_dots = "";
    let password = "";
    let loading = false;
    let hasConnectionError = false;
    let isConnected = false;
    let trailing_dots_interval = undefined;
    let connct_timeout = undefined;

    const connect = async () => {
        try {
            loading = true;
            const formData = new FormData();
            formData.append("ssid", selectedNetwork.ssid);
            formData.append("password", password);
            const response = await fetch(BASE_URL + "/connect?ssid=&password=", {
                method: "POST",
                body: formData,
            });
            const jsonResponse = await response.json();
            isConnected = jsonResponse.connected;
            hasConnectionError = !jsonResponse.connected;
            if (isConnected) {
                trailing_dots_interval = setInterval(() => {
                    trailing_dots = trailing_dots + ".";
                    if (trailing_dots.length > 3) trailing_dots = "";
                }, 250);
                connct_timeout = setTimeout(() => onConnect("connect"), 2000);
            }
        } catch (error) {
            console.error("Cannot connect to network");
            hasConnectionError = true;
            isConnected = false;
        }
        loading = false;
    };

    onDestroy(() => {
        if (trailing_dots_interval != undefined) clearInterval(trailing_dots_interval);
        if (connct_timeout != undefined) clearTimeout(connct_timeout);
    });
</script>

<div id="wifi-connection">
    {#if !isConnected}
        <Title title={"Conectando a rede"} subtitle={selectedNetwork.ssid} />
    {/if}
    {#if loading}
        <Loader loadingText="Conectando..." />
    {/if}
    <div id="wifi-credentials">
        {#if isConnected}
            <div id="connection-success">
                <p>Conectado com sucesso!</p>
                <p>Aguarde{trailing_dots}</p>
            </div>
        {:else}
            {#if selectedNetwork.has_password}
                <Input type="password" bind:value={password} placeholder="Digite a senha da rede Wifi" />
            {/if}
            <Button on:click={connect}>
                <svelte:fragment>Conectar</svelte:fragment>
            </Button>
            {#if hasConnectionError}
                <div id="connection-error">
                    <p>Não foi possível conectar a rede Wifi.</p>
                    <p>verifique se a senha está correta</p>
                    <p>e se o ponto de acesso está próximo</p>
                </div>
            {/if}
        {/if}
    </div>
</div>

<style lang="scss">
    @import "../../styles/colors.scss";
    #wifi-connection {
        width: 100%;
        align-self: stretch;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        #wifi-credentials {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            #connection-error {
                color: $error-color;
                margin-top: 1rem;
                font-weight: 600;
                font-size: large;
                text-align: center;
                p {
                    margin: 0.5rem;
                }
            }
            #connection-success {
                color: $success-color;
                font-weight: 600;
                font-size: large;
                text-align: center;
                font-size: 1.5rem;
                p {
                    margin: 0.5rem;
                }
            }
        }
    }
</style>
