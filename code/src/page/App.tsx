import Layout from "./layout";
import React from "react";
import {useTranslation} from "react-i18next";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Typography} from "@mui/material";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Typography>Bienvenido</Typography>,
        //loader: rootLoader,
    },
    {
        path: "/prueba",
        element: <Typography>Prueba</Typography>
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