<script lang="ts">
    export let type = "text";
    export let value = "";
    export let placeholder = "";
    export let max = "";
    export let marginBottom = "1rem";

    const id = "ID_" + String(Math.random()).slice(2);

    function typeAction(element: HTMLInputElement) {
        element.type = type;
    }
</script>

<div class="input" style={`margin-bottom: ${marginBottom}`}>
    <input {id} use:typeAction bind:value {max} placeholder="&nbsp;" />
    <label for={id}>{placeholder}</label>
</div>

<style lang="scss">
    @import "../styles/colors.scss";
    .input {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        label {
            position: absolute;
            top: 0;
            left: 10px;
            cursor: text;
            transform-origin: 0% 100%;
            transform: translateY(14px);
            transition: 0.2s ease-out;
            font-size: 1.2em;
            color: $text-color-light;
            font-weight: bold;
        }

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 1.2em;
            font-weight: bold;
            padding: 0 10px;
            color: $text-color-light;
            transition: 0.2s;
            border-bottom: 2px solid $base-color-light;
            margin-bottom: 1rem;

            &::placeholder {
                color: transparent;
            }

            &:focus + label,
            &:not(:placeholder-shown) + label {
                transform: translateY(-22px) scale(0.85);
            }

            &:focus,
            &:not(:placeholder-shown) {
                border-bottom: 2px solid $base-color;
                box-shadow: 0 1px 0 0 $base-color;
            }
        }
    }
</style>
