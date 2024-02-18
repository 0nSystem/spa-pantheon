import {createSlice} from "@reduxjs/toolkit";
import {ApplicationDataDTO} from "../../service/output/types";

interface ApplicationPageState {
    applicationsFiltered: ApplicationDataDTO[]
}

const initialState = {
    applicationsFiltered: []
}

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState,
    reducers: {

    },
})



