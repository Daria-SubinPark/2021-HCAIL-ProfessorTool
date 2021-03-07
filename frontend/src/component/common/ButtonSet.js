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

const MainPage = ({setChartNumber}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('1') }} >
                1
            </Button>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('2') }}>
                2
            </Button>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('3') }}>
                3
            </Button>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('4') }}>
                4
            </Button>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('5') }}>
                5
            </Button>
            <Button variant="contained" color="primary" onClick={() => { setChartNumber('6') }}>
                6
            </Button>
        </div>
    );
}

export default MainPage;