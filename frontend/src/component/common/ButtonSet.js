import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const MainPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                1
            </Button>
            <Button variant="contained" color="primary">
                2
            </Button>
            <Button variant="contained" color="primary">
                3
            </Button>
            <Button variant="contained" color="primary">
                4
            </Button>
            <Button variant="contained" color="primary">
                5
            </Button>
            <Button variant="contained" color="primary">
                6
            </Button>
        </div>
    );
}

export default MainPage;