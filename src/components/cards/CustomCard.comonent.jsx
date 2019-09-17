import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CardImage from './CardImage.component';
import TextField from '@material-ui/core/TextField';
import CardSound from './CardSound.component';
import './CustomCard.styles.scss';
import { editData } from '../../redux/actions/card.action';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    card: {
        maxWidth: 345,
    },
    fab: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
}));


const CustomCard = (props) => {
    const classes = useStyles();
    const { card: { title, description, image, tag, code, sound } = {}, index } = props;
    const [state, setState] = useState({
        edit: false,
        description,
        title,
        tag,
        image,
        code,
        sound,
        index
    });

    useEffect(() => {
        setState({ title, description, tag, image, code, sound });
    }, [title, description, code, tag, image, sound]);


    const handleEdit = () => {
        setState({ ...state, edit: !state.edit });
    };


    const handleInputChange = (name) => (e) => {
        setState({ ...state, [name]: e.target.value });
    }

    const handleSave = () => {
        if (state.edit) {
            const { title, description } = state;
            // save edited text
            props.editCard({ title, description, index });
        }
        handleEdit();
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {
                            state.edit ?
                                <TextField
                                    id="outlined-name"
                                    label="Title"
                                    className={classes.textField}
                                    value={state.title}
                                    onChange={handleInputChange('title')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                :
                                state.title
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="span">
                        {
                            state.edit ?
                                <TextField
                                    id="outlined-name"
                                    label="Description"
                                    className={classes.textField}
                                    value={state.description}
                                    onChange={handleInputChange('description')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                :
                                state.description
                        }
                    </Typography>
                </CardContent>
                {
                    code === 0 ?
                        <CardImage tag={tag} image={image} />
                        :
                        null
                }
                {
                    code === 2 ?
                        <CardSound music={sound} />
                        :
                        null
                }
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" color="secondary" size="small" className={`${classes.button} btnStyles`} onClick={props.try}>
                    try
                </Button>
                {
                    state.edit ?
                        <Button variant="outlined" color="secondary" size="small" className={`${classes.button} btnStyles`} onClick={handleSave}>
                            <SaveIcon className={`${classes.leftIcon} ${classes.iconSmall}`} />
                            Save
                        </Button>
                        :
                        <Fab color="secondary" aria-label="edit" size="small" className={`${classes.fab} btnStyles`} onClick={handleEdit}>
                            <EditIcon />
                        </Fab>
                }
            </CardActions>
        </Card>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        editCard: (data) => {
            dispatch(editData(data));
        }
    }
}


export default connect(null, mapDispatchToProps)(CustomCard);