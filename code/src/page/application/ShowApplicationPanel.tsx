import {useSelector} from "react-redux";
import {selectGeneralLayoutApplication} from "../../redux/slice/general";
import React from "react";
import Box from '@mui/material/Box';
import {useTranslation} from "react-i18next";
import {Divider, Grid, Typography} from "@mui/material";
import ApplicationPropertiesPanel from "./ApplicationPropertiesPanel";
import UsersPropertiesPanel from "./UsersPropertiesPanel";

const ShowApplicationPanel: React.FC = () => {
    const {t} = useTranslation();

    const applicationWithUserData = useSelector(selectGeneralLayoutApplication);

    return (
        <>
            {
                applicationWithUserData &&
                <Box
                    sx={{width: '100%', typography: 'body1'}}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography>{applicationWithUserData.applicationWithUserData.applicationData.applicationInfo.name}</Typography>
                            <Typography>{applicationWithUserData.applicationWithUserData.applicationData.applicationInfo.description}</Typography>
                        </Grid>

                        <Divider/>
                        <ApplicationPropertiesPanel/>
                        <UsersPropertiesPanel/>
                    </Grid>
                </Box>
            }
        </>
    )
}

export default ShowApplicationPanel;