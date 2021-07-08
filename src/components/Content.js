import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    bannerWrap: {
        height: "90vh",
        display: "flex"
    },
    ltbg: {
        background: '#e8e8e8',
        flex: 1
    },
    wtbg: {
        flex: 1,
        background: '#fff'
    }
}));

const Content = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bannerWrap}>
                <div className={classes.ltbg}></div>
                <div className={classes.wtbg}></div>
            </div>
        </div>
    );
}

export default Content;
