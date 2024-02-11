import Layout from "./layout";
import React from "react";
import {useTranslation} from "react-i18next";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Typography} from "@mui/material";
import ApplicationsPage from "./applications";
import ApplicationPage from "./application";
import {webUrl} from "../Constans";


const router = createBrowserRouter([
    {
        path: webUrl.index,
        element: <Typography>Bienvenido</Typography>,
        //loader: rootLoader,
    },
    {
        path: webUrl.applications.url,
        element: <ApplicationsPage/>,
    },
    {
        path: webUrl.application.url,
        element: <ApplicationPage/>
    }
]);


const App: React.FC = () => {

    const {t} = useTranslation();

    return (
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    )
}


export default App;