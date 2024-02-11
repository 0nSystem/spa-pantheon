import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import {Grid} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";


const ApplicationPropertiesPanel: React.FC = () => {
    const {t} = useTranslation();

    const [stateTab, setStateTab] = React.useState('1');
    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setStateTab(newValue);
    };

    return (
        <Grid item md={6} xs={12}>
            <TabContext value={stateTab}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1"/>
                        <Tab label="Item Two" value="2"/>
                        <Tab label="Item Three" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    Item One
                </TabPanel>
                <TabPanel value="2">
                    Item Two
                </TabPanel>
                <TabPanel value="3">
                    Item Three
                </TabPanel>
            </TabContext>
        </Grid>
    )
}


export default ApplicationPropertiesPanel;