import { setContext } from "svelte";

const DEVELOPMENT = true;

const BASE_URL = DEVELOPMENT ? "http://localhost:2245" : "";
const REQUEST_TIME_MS = DEVELOPMENT ? 1000 : 10000;
export default () => {
    setContext("BASE_URL", BASE_URL);
    setContext("REQUEST_TIME_MS", REQUEST_TIME_MS);
};
