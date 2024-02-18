import {Collapse, Grid, IconButton, List, ListItemButton, ListItemText} from "@mui/material";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {useSelector} from "react-redux";
import {selectGeneralLayoutApplication} from "../../redux/general/general";
import {
    AttributeUserDataDTO,
    PermissionInfoDTO,
    RoleInfoDTO,
    UserDataInApplicationDTO
} from "../../service/output/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "../../components/ExpandMore";
import TextListItem from "../../components/TextListItem";
import AddIcon from "@mui/icons-material/Add";


const UsersPropertiesPanel: React.FC = () => {
    const applicationWithUserData = useSelector(selectGeneralLayoutApplication);


    const [stateTab, setStateTab] = React.useState('users');
    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setStateTab(newValue);
    };

    return (
        <Grid item md={6} xs={12}>
            <TabContext value={stateTab}>
                <Box sx={{display: 'flex', justifyContent: "space-between"}}>
                    <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                        <Tab label="Users" value="users"/>
                    </TabList>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </Box>
                <TabPanel value="users">
                    {
                        applicationWithUserData && (
                            applicationWithUserData.applicationWithUserData.users.map((e, i) => {
                                return <UserItem userInfo={e.userInfo}
                                                 permissions={e.permissions}
                                                 role={e.role}
                                                 attribute={e.attribute}
                                />
                            })
                        )
                    }
                </TabPanel>
            </TabContext>
        </Grid>
    )
}


const UserItem: React.FC<UserDataInApplicationDTO> = ({userInfo, role, attribute, permissions}) => {
    const [isExpandGeneralState, setExpandGeneralState] = useState(false);

    const handlerClickExpandGeneral = () => {
        setExpandGeneralState(!isExpandGeneralState);
    }

    return (
        <List>
            <ListItemButton>
                <ListItemText primary={userInfo.name} secondary={userInfo.surname}/>
                <ExpandMore
                    expand={isExpandGeneralState}
                    onClick={handlerClickExpandGeneral}
                    aria-expanded={isExpandGeneralState}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </ListItemButton>
            <Collapse in={isExpandGeneralState} timeout={"auto"} unmountOnExit>
                <UserPropertiesComponent primary={"Permission"} values={permissions}/>
                <UserPropertiesComponent primary={"Role"} values={role}/>
                <UserPropertiesComponent primary={"Attribute123"} values={attribute}/>

            </Collapse>
        </List>
    )
}


interface PropertiesUserPropertiesComponent {
    primary: string,
    values: RoleInfoDTO[] | PermissionInfoDTO[] | AttributeUserDataDTO[],
    fn_delete?: () => void,
    fn_add?: () => void
}

const UserPropertiesComponent: React.FC<PropertiesUserPropertiesComponent> = (
    {
        values,
        primary
    }
) => {
    const handlerDeletePermission = () => {

    }
    const handlerDeleteRole = () => {

    }


    return (
        <TextListItem primary={primary} onSave={()=>{}}>
            {
                values.map((e, i) => {
                    if ('idRole' in e) {
                        return <TextListItem
                            primary={e.name}
                            secondary={e.description}
                            onDelete={handlerDeleteRole}/>;
                    } else if ('idPermission' in e) {
                        return <TextListItem
                            primary={e.name}
                            secondary={e.description}
                            onDelete={handlerDeletePermission}/>;
                    } else if ('attributeId' in e) {
                        return <UserMultiplesPropertiesComponent attributeUser={e}/>;
                    } else {
                        return <h1>Not Supported</h1>;
                    }

                })
            }
        </TextListItem>
    )
}

const UserMultiplesPropertiesComponent: React.FC<{ attributeUser: AttributeUserDataDTO }> = (
    {
        attributeUser
    }
) => {
    const handlerDeleteAttribute = () => {

    }


    return (
        <TextListItem primary={attributeUser.name}
                      secondary={attributeUser.description}
                      onDelete={handlerDeleteAttribute}>
            {
                attributeUser.values.map((e, i) => {
                    return <TextListItem primary={e}
                                         onDelete={handlerDeleteAttribute}
                                         onSave={(a,e)=>{}}
                    />
                })
            }
        </TextListItem>

    )
}


export default UsersPropertiesPanel;