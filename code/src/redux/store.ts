import {configureStore} from "@reduxjs/toolkit";
import generalReducer from './slice/general'

export const rootStore = configureStore({
    reducer: {
        general: generalReducer,

    }
})



export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;







