import {useSelector} from "react-redux";
import {selectGeneralLayoutApplication} from "../../redux/slice/general";
import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useTranslation} from "react-i18next";
import ApplicationPropertiesPanel from "./ApplicationPropertiesPanel";
import UsersPropertiesPanel from "./UsersPropertiesPanel";

const ShowApplicationPanel: React.FC = () => {
    const [value, setValue] = React.useState('1');
    const {t} = useTranslation();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const applicationWithUserData = useSelector(selectGeneralLayoutApplication);

    return (
        <>
            {
                applicationWithUserData &&
                <Box
                    sx={{width: '100%', typography: 'body1'}}
                >
                    <TabContext value={value}>
                        <Box
                            sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList
                                onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Properties" value="1"/>
                                <Tab label="Users" value="2"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ApplicationPropertiesPanel/>
                        </TabPanel>
                        <TabPanel value="2">
                            <UsersPropertiesPanel/>
                        </TabPanel>

                    </TabContext>
                </Box>
            }
        </>
    )
}

export default ShowApplicationPanel;