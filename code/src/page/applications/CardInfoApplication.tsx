import {ApplicationDataDTO} from "../../service/output/types";
import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import React, {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMore from "../../components/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';
import {useTranslation} from "react-i18next";
import {webUrl} from "../../Constans";
import {useNavigate} from "react-router-dom";

interface OptionsCardInfoApplication {
    app: ApplicationDataDTO
}


const CardInfoApplication: React.FC<OptionsCardInfoApplication> = ({app}) => {
    const [expanded, setExpanded] = useState(false);
    const {t} = useTranslation();

    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handlerSearchApplicationClick = () => {
        navigate(webUrl.application.resolve(app.applicationInfo.idApplication))
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={app.applicationInfo.name}
                subheader={new Date(app.applicationInfo.highDate).toLocaleDateString()}
            />
            <CardMedia
                component="img"
                height="194"
                //image="/static/images/cards/paella.jpg"
                //alt={`icon ${app.applicationInfo.name}`}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {app.applicationInfo.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="search"
                            onClick={handlerSearchApplicationClick}>
                    <SearchIcon/>
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Other info</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CardInfoApplication;


