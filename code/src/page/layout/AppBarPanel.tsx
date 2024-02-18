import React from "react";
import {useSelector} from "react-redux";
import {selectGeneralLayoutRoutePath} from "../../redux/general/general";
import {AppBar, Breadcrumbs, Link, Toolbar, Typography} from "@mui/material";


const AppBarPanel: React.FC = () => {
    const selectRoutePath = useSelector(selectGeneralLayoutRoutePath);

    return (
        <AppBar>
            <Toolbar>
                <Breadcrumbs aria-label="breadcrumb">
                    {
                        selectRoutePath.map((e, i) => {
                                return e.link ?
                                    <Link key={`keyPanelElementLink-${i}`}
                                          underline="hover"
                                          color="inherit"
                                          href={e.link}>
                                        <Typography color="text.primary">{e.path}</Typography>
                                    </Link>
                                    :
                                    <Typography key={`keyPanelElementText-${i}`}
                                                color="text.primary">
                                        {e.path}
                                    </Typography>
                            }
                        )
                    }
                </Breadcrumbs>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarPanel;