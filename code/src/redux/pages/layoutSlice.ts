import {createSlice} from "@reduxjs/toolkit";

interface LayoutPageState {
    routePath: RoutePathElement[],
    alert?: AlertMessage,
}
interface RoutePathElement {
    path: string,
    link?: string
}

interface AlertMessage {
    message: string,
    level: "success" | "info" | "warning" | "error",
    timeOut: number,
    enable?: boolean
}

const initialState: LayoutPageState = {
    alert: {
        message: "Alerta",
        level: "success",
        enable: true,
        timeOut: 100000
    },
    routePath: [
        {
            path: "App",
            link: "/"
        }
    ]
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {

    },
})


export const layoutReducer = layoutSlice.reducer;