import {combineSlices} from "@reduxjs/toolkit";
import {layoutSlice} from "./layoutSlice";
import {applicationsSlice} from "./applicationsSlice";
import {applicationPageSlice} from "./applicationSlice";


export const pagesSlice = combineSlices(
    layoutSlice,
    applicationsSlice,
    applicationPageSlice
)
