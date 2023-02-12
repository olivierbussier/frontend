import { createContext } from "react";
import { API } from "../API";

const globals = {
    api: new API(),
}

export const Globals = createContext({
    setApi: value => globals.api = value,
    getApi: () => globals.api,
});
