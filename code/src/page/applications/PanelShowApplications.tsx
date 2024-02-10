import React from "react";
import {selectGeneralApplicationsPage} from "../../redux/slice/general";
import {useSelector} from "react-redux";
import CardInfoApplication from "./CardInfoApplication";


const PanelShowApplications: React.FC = () => {
    const useSelectGeneralApplicationsPage = useSelector(selectGeneralApplicationsPage);


    return (
        <>
            {
                useSelectGeneralApplicationsPage &&
                useSelectGeneralApplicationsPage.applicationsFiltered &&
                useSelectGeneralApplicationsPage.applicationsFiltered
                    .map((app, i) => {
                        return <CardInfoApplication
                            key={`card-info-application-${i}`}
                            app={app}/>
                    })
            }
        </>
    )
}

export default PanelShowApplications;