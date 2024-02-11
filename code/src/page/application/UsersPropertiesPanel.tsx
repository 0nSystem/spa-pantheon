import {Grid, Typography} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";


const UsersPropertiesPanel: React.FC = () => {


    const [stateTab, setStateTab] = React.useState('1');
    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setStateTab(newValue);
    };

    return (
        <>
            <Grid item md={6} xs={12}>
                <TabContext value={stateTab}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Item One
                    </TabPanel>
                </TabContext>
            </Grid>
        </>
    )
}


export default UsersPropertiesPanel;