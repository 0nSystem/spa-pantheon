import {ApplicationWithUserDataDTO} from "../../service/output/types";
import {createSlice} from "@reduxjs/toolkit";


interface ApplicationPageState {
    applicationWithUserData: ApplicationWithUserDataDTO
}

const initialState = {
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


export const applicationPageSlice = createSlice({
    name: 'application',
    initialState,
    reducers:{

    }
})