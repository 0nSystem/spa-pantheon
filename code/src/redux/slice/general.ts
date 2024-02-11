import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../store";
import {ApplicationDataDTO, ApplicationWithUserDataDTO} from "../../service/output/types";

interface GeneralState {
    applicationsInfo: ApplicationDataDTO[],
    layoutState: LayoutState,
    applicationsPage?: ApplicationsPage,
    applicationPage?: ApplicationPage,
}

interface ApplicationPage {
    applicationWithUserData: ApplicationWithUserDataDTO
}

interface ApplicationsPage {
    applicationsFiltered?: ApplicationDataDTO[]
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
    ],
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
    applicationPage: {
        applicationWithUserData: {
            applicationData: {
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
            },
            users: [
                {
                    userInfo: {
                        idUser: 1,
                        name: "asd",
                        email: "email",
                        login: "login",
                        surname: "surname",
                        highIdUser: 1,
                        highDate: new Date().getDate()
                    },
                    attribute: [{
                        name: "Attribute",
                        description: "Description Attribute",
                        attributeId: 1,
                        userId: 1,
                        values: ["value1", "value2"]
                    }],
                    role: [{
                        name: "Role1",
                        description: "Description Role1",
                        idRole: 1
                    }],
                    permissions: [{
                        idPermission: 1,
                        name: "Permission1",
                        description: "Description Permission1",
                    },
                        {
                            idPermission: 1,
                            name: "Permission1",
                            description: "Description Permission1"
                        }
                    ],
                }
            ]
        }
    }
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
        },
        setApplicationsFiltered: (state, message: PayloadAction<ApplicationDataDTO[]>) => {
            state.applicationsPage = {
                ...state.applicationsPage,
                applicationsFiltered: message.payload
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

export const {fetchApplicationsInfo, setApplicationsFiltered} = generalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGeneralState = (state: RootState) => state.general;
export const selectGeneralApplicationInfoState = (state: RootState) => state.general.applicationsInfo;

export const selectGeneralApplicationsPage = (state: RootState) => state.general.applicationsPage;

export const selectGeneralLayout = (state: RootState) => state.general.layoutState;
export const selectGeneralLayoutRoutePath = (state: RootState) => state.general.layoutState.routePath;

export const selectGeneralLayoutApplication = (state: RootState) => state.general.applicationPage;

export default generalSlice.reducer