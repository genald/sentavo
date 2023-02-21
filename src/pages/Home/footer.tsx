import { Box, Grid, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";

import styles from './home.module.css'

import sentavo  from "assets/images/sentavo_white.png";
import fb from "assets/images/fb.png"
import ig from "assets/images/ig.png"
import gmail from "assets/images/gmail.png"
import twitter from "assets/images/twitter.png"
import tiktok from "assets/images/tiktok.png"
import linkedin from "assets/images/linkedin.png"
import { Helmet } from "react-helmet-async";

const Footer = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('footer')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }

    const typography = {
        fontFamily: 'Montserrat',
        fontSize: "calc( 10px + ( 10rem - 10rem ) )",
        fontWeight: "normal",
        lineHeight: "1.0em",
        letterSpacing: "0.2em",
        color: "white",
        textShadow: "none"
    }
    return <Box bgcolor="black" height="500px" textAlign="center" color="white" paddingBottom="50px" id="footer" className={`${styles.fade_in} ${visible? "": styles.hidden}`} >
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap" rel="stylesheet"/>
        </Helmet>
        <Grid container height="100%" direction="column" justifyContent="center" justifyItems="center">
            <Grid item>
                <img src={sentavo} width="180px"/>
                <Typography {...typography} textTransform="uppercase" margin="30px 0 10px 0">
                    All rights reserved to SENTAVO TECHNOLOGIES inc 2023
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="mailto:info@sentavo.app" target="__blank">
                                <img src={gmail} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="https://www.facebook.com/SentavoApp" target="__blank">
                                <img src={fb} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="https://www.instagram.com/sentavoapp" target="__blank">
                                <img src={ig} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="https://www.twitter.com/sentavoapp" target="__blank">
                                <img src={twitter} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="https://www.tiktok.com/@sentavoapp" target="__blank">
                                <img src={tiktok} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box width="35px" height="35px" margin="31px">
                            <a href="https://www.linkedin.com/company/sentavoapp" target="__blank">
                                <img src={linkedin} width="100%"/>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
})

export default Footer