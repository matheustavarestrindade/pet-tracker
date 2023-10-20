<script lang="ts">
    import Button from "../../components/Button.svelte";

    import Input from "../../components/Input.svelte";
    import Title from "../../components/Title.svelte";

    let password;
    let email;

    const handleLogin = async () => {};
</script>

<div id="login">
    <div class="mb">
        <Title title="Login" subtitle="Realize login para registrar o seu produto" />
    </div>
    <Title subtitle="Utilize o mesmo e-mail e senha que você se registrou em nosso site!" />
    <div id="fields">
        <Input type="email" bind:value={email} placeholder="Digite o seu e-mail" />
        <Input type="password" bind:value={password} placeholder="Digite a sua senha" />
        <Button on:click={handleLogin}>
            <svelte:fragment>Login</svelte:fragment>
        </Button>
    </div>
</div>

<style lang="scss">
    @import "../../styles/colors.scss";
    #login {
        .mb {
            margin-bottom: 0.5rem;
        }
        width: 100%;
        align-self: stretch;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        #fields {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
</style>
