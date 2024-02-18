import {createSlice} from "@reduxjs/toolkit"
import {ApplicationDataDTO} from "../../service/output/types";

interface GeneralState {
    applicationsInfo: ApplicationDataDTO[]
}





// Define the initial state using that type
const initialState: GeneralState = {
    applicationsInfo: [
        {
            applicationInfo: {
                idApplication: 1,
                name: "App1",
                description: "Description App1",
                highDate: new Date().getDate(),
                highIdUser: 1,
            },
            attributesInfo: [
                {
                    name: "Attribute",
                    description: "Description Attribute",
                    idAttribute: 1
                }
            ],
            permissionInfo: [{
                //TODO permission id
                idPermission: 1,
                name: "Permission1",
                description: "Description Permission1"
            }],
            rolesInfo: [
                {
                    name: "Role1",
                    description: "Description Role1",
                    idRole: 1
                }
            ]
        }
    ]
}

export const generalSlice = createSlice({
    name: 'general',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },


    /*
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
    },
     */

})

export const {} = generalSlice.actions

export default generalSlice.reducer