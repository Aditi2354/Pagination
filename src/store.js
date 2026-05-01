import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";

export const store =configureStore({
    reducer:{
        [api.reducerPath] :api.reducer
    },
    middleware:(gDM)=>gDM().concat(api.middleware)
})

setupListeners(store.dispatch)