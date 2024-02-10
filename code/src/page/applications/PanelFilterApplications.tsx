import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {selectGeneralApplicationInfoState, setApplicationsFiltered} from "../../redux/slice/general";
import {ApplicationDataDTO} from "../../service/output/types";
import {Autocomplete, Checkbox, TextField} from "@mui/material";
import {AppDispatch} from "../../redux/store";


const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;
const PanelFilterApplications: React.FC = () => {
    const {t} = useTranslation();
    const selectorGeneralApplications = useSelector(selectGeneralApplicationInfoState);
    const dispatch: AppDispatch = useDispatch();
    const handleAutocompleteChange = (event: React.ChangeEvent<{}>, values: ApplicationDataDTO[]) => {
        dispatch(setApplicationsFiltered(values));
    };

    return (
        <Autocomplete

            id="checkboxes-tags-demo"
            options={selectorGeneralApplications}
            multiple
            disableCloseOnSelect
            onChange={handleAutocompleteChange}
            getOptionLabel={(option) => option.applicationInfo.name}
            renderOption={(props, option, {selected}) => (
                <li {...props}>
                    <Checkbox
                        key={`checkbox-panel-filter-applications-${option.applicationInfo.idApplication}`}
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{marginRight: 8}}
                        checked={selected}
                    />
                    {option.applicationInfo.description}
                </li>
            )}
            renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="select"/>
            )}
        />
    )
}

export default PanelFilterApplications;