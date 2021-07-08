import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .scrollPositionTop': {
            background: "transparent",
            color: theme.palette.common.black,
            boxShadow: '0px 0px'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    footer: {
        minHeight: 300,
        background: '#272727',
        color: theme.palette.common.white
    },
    appbar: {
        background: "#5a5a5a"
    }
}));

function HideOnScroll(props) {
    const { children, window } = props;

    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Layout(props) {
    const classes = useStyles();
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log();
            if (window.scrollY === 0) {
                document.getElementById('appbar').classList.add("scrollPositionTop")
            } else {
                if (document.getElementById('appbar').classList.contains("scrollPositionTop"))
                    document.getElementById('appbar').classList.remove("scrollPositionTop")
            }
        })
    }, [])

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar className={classes.appbar} id="appbar">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Box fontStyle="italic">
                                Rajesh
                            </Box>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

            </HideOnScroll>
            {props.children}
            <div className={classes.footer}>
                contact us
            </div>
        </div>
    );
}
