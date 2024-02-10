import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {ApplicationDataDTO} from "../../service/output/types";

interface GeneralState {
    applicationsInfo: ApplicationDataDTO[],
    layoutState: LayoutState,
}




interface LayoutState {
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


// Define the initial state using that type
const initialState: GeneralState = {
    applicationsInfo: [],
    layoutState: {
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
    },

}

export const generalSlice = createSlice({
    name: 'general',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetchApplicationsInfo: (state) => {
            state.applicationsInfo = [];
        },

        closeAlertPanel: (state) => {
            state.layoutState.alert!.enable = false;
        },
        //TODO make other objection remove property enabled
        displayMessage: (state, message: PayloadAction<AlertMessage>) => {
            state.layoutState.alert = {
                ...message.payload,
                enable: true
            };
        }
    },


    /*
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
    },
     */

})

export const {fetchApplicationsInfo} = generalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGeneralState = (state: RootState) => state.general;
export const selectGeneralApplicationInfoState = (state: RootState) => state.general.applicationsInfo;

export const selectGeneralLayout = (state: RootState) => state.general.layoutState;
export const selectGeneralLayoutRoutePath = (state: RootState) => state.general.layoutState.routePath;

export default generalSlice.reducer