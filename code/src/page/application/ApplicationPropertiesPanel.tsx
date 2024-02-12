import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import {Grid, IconButton, List, ListItemButton, ListItemIcon} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import {useSelector} from "react-redux";
import {selectGeneralLayoutApplication} from "../../redux/slice/general";
import TextListItem from "../../components/TextListItem";


const ApplicationPropertiesPanel: React.FC = () => {
    const [stateTab, setStateTab] = React.useState("permission");
    const {t} = useTranslation();
    const applicationWithUserData = useSelector(selectGeneralLayoutApplication);

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setStateTab(newValue);
    };

    const handleClickAddIcon = () => {

    }

    return (
        <Grid item md={6} xs={12}>
            <TabContext value={stateTab}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                        <Tab label="Permission" value="permission"/>
                        <Tab label="Role" value="role"/>
                        <Tab label="Attributes" value="attribute"/>
                    </TabList>
                    <IconButton>
                        <AddIcon onClick={handleClickAddIcon}/>
                    </IconButton>
                </Box>
                <TabPanel value="permission">
                    <List>
                        {
                            applicationWithUserData &&
                            applicationWithUserData.applicationWithUserData.applicationData.permissionInfo.map((e, i) => {
                                return <TextListItem primary={e.name} secondary={e.description}
                                                     onSave={(a, e) => {
                                                     }}/>
                            })
                        }
                    </List>
                </TabPanel>
                <TabPanel value="role">
                    <List>
                        {
                            applicationWithUserData &&
                            applicationWithUserData.applicationWithUserData.applicationData.rolesInfo.map((e, i) => {
                                return <TextListItem primary={e.name} secondary={e.description}
                                                     onSave={(a, e) => {
                                                     }}/>
                            })
                        }
                    </List>
                </TabPanel>
                <TabPanel value="attribute">
                    <List>
                        {
                            applicationWithUserData &&
                            applicationWithUserData.applicationWithUserData.applicationData.attributesInfo.map((e, i) => {
                                return <TextListItem primary={e.name} secondary={e.description}
                                                     onSave={(a, e) => {
                                                     }}/>
                            })
                        }
                    </List>
                </TabPanel>
            </TabContext>
        </Grid>
    )
}


export default ApplicationPropertiesPanel;