<script lang="ts">
    import Button from "../../components/Button.svelte";
    import Input from "../../components/Input.svelte";
    import Title from "../../components/Title.svelte";

    let name: string;
    let birthDate: string;
    let weigth: string;
</script>

<div id="pet-data">
    <Title title="Dados do seu pet" subtitle="Preencha os dados do seu pet" />
    <div id="fields">
        <Input type="text" placeholder="Digite o nome do seu Pet" bind:value={name} marginBottom="2rem" />
        <Input type="date" max="9999-12-31" placeholder="Data de nascimento do seu Pet" bind:value={birthDate} />
        <Input type="number" placeholder="Digite o peso do seu Pet (KG)" bind:value={weigth} />
        <Button>
            <svelte:fragment>Continuar</svelte:fragment>
        </Button>
    </div>
</div>

<style lang="scss">
    #pet-data {
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
