import React, { useState } from 'react';
import {ListItemText, ListItemButton, TextField, ListItemIcon} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

interface EditableListItemTextProps {
    primary: string;
    secondary?: string;
}

const EditableListItemText: React.FC<EditableListItemTextProps> = ({ primary, secondary }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPrimary, setEditedPrimary] = useState(primary);
    const [editedSecondary, setEditedSecondary] = useState(secondary || '');

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
        <ListItemButton>
            {isEditing ? (
                <>
                    <TextField
                        value={editedPrimary}
                        onChange={handleChangePrimary}
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        value={editedSecondary}
                        onChange={handleChangeSecondary}
                        fullWidth
                    />
                    <SaveIcon onClick={handleSave}/>
                    <CancelIcon onClick={handleCancel}/>

                </>
            ) : (
                <>
                    <ListItemText primary={editedPrimary} secondary={editedSecondary} />
                    <EditIcon onClick={handleEdit}/>
                </>
            )}
        </ListItemButton>
    );
};

export default EditableListItemText;
