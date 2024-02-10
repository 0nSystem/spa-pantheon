import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {generalSlice, selectGeneralLayout} from "../../redux/slice/general";
import {AppDispatch} from "../../redux/store";
import {Alert, Snackbar} from "@mui/material";


const AlertPanel: React.FC = () => {
    const selectorGeneralLayout = useSelector(selectGeneralLayout);
    const dispatch: AppDispatch = useDispatch();

    const handlerCloseEvent = () => {
        dispatch(generalSlice.actions.closeAlertPanel())
    }

    return (
        <>
            {
                selectorGeneralLayout.alert && (
                    <Snackbar
                        open={selectorGeneralLayout.alert.enable}
                        autoHideDuration={selectorGeneralLayout.alert.timeOut}
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                        onClose={handlerCloseEvent}
                        style={{top: 64}}

                    >
                        <Alert severity={selectorGeneralLayout.alert.level}
                               onClose={handlerCloseEvent}
                        >
                            {selectorGeneralLayout.alert.message}
                        </Alert>
                    </Snackbar>
                )}
        </>
    );
};


export default AlertPanel;