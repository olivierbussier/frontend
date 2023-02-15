import { createContext } from "react";
import { API } from "../API";

const globals = {
    api: new API(),
}

/**
 * This React context is used to handle global variables for the entire application
 * At this stage, only API instance created at initialisation is stored in this context
 * We don't use a redux state du to the fact that objects must be serialized before storing
 * 
 */
export const Globals = createContext({
    setApi: value => globals.api = value,
    getApi: () => globals.api,
});
