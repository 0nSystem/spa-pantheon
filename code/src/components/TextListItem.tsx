import React, {useState} from 'react';
import {Collapse, ListItemButton, ListItemText, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "./ExpandMore";

interface EditableListItemTextProps {
    primary: string;
    secondary?: string;
    onSave?: (primary: string, secondary?: string) => void,
    onDelete?: () => void,
    children?: React.ReactNode;
}

const TextListItem: React.FC<EditableListItemTextProps> = (
    {
        primary, secondary,
        onSave, onDelete,
        children
    }
) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isExpandState, setExpandGeneral] = useState(false);


    const [editedPrimary, setEditedPrimary] = useState(primary);
    const [editedSecondary, setEditedSecondary] = useState(secondary || '');


    const handlerClickExpand = () => {
        setExpandGeneral(!isExpandState);
    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChangePrimary = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedPrimary(event.target.value);
    };

    const handleChangeSecondary = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedSecondary(event.target.value);
    };

    return (
        <>
            <ListItemButton>
                {isEditing ? (
                    <>
                        <TextField
                            value={editedPrimary}
                            onChange={handleChangePrimary}
                            fullWidth
                            autoFocus
                        />

                        {
                            secondary &&
                            <TextField
                                value={editedSecondary}
                                onChange={handleChangeSecondary}
                                fullWidth
                            />
                        }
                        <SaveIcon onClick={handleSave}/>
                        <CancelIcon onClick={handleCancel}/>

                    </>
                ) : (
                    <>
                        <ListItemText primary={editedPrimary} secondary={editedSecondary}/>
                        {
                            children &&
                            <ExpandMore
                                expand={isExpandState}
                                onClick={handlerClickExpand}
                                aria-expanded={isExpandState}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon/>
                            </ExpandMore>
                        }
                        {
                            onSave &&
                            <EditIcon onClick={handleEdit}/>
                        }
                        {
                            onDelete &&
                            <DeleteIcon onClick={onDelete}/>
                        }
                    </>
                )}
            </ListItemButton>
            <Collapse in={isExpandState} timeout={"auto"} unmountOnExit>
                {children && !isEditing && (
                    children
                )}
            </Collapse>
        </>
    );
};

export default TextListItem;
