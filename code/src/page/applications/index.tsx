import React from 'react';
import {Divider, Stack} from "@mui/material";
import PanelFilterApplications from "./PanelFilterApplications";
import PanelShowApplications from "./PanelShowApplications";


const ApplicationsPage: React.FC = () => {
    return (
        <Stack
            direction={"column"}
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}>
            <PanelFilterApplications/>
            <PanelShowApplications/>
        </Stack>
    )
}



export default ApplicationsPage;
