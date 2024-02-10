import React from 'react';
import AlertPanel from "./AlertPanel";
import AppBarPanel from "./AppBarPanel";
import {Box} from "@mui/material";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>

            <Box bgcolor={"aqua"}>
                <AppBarPanel/>
                <div style={{
                    position: 'relative',
                    marginTop: '64px'
                }}>
                    {children}
                </div>
                <AlertPanel/>
            </Box>

        </>
    )
};

export default Layout;
