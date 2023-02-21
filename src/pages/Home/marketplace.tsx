import { memo, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import styles from "./home.module.css";

import marketplace from "assets/images/marketplace.jpg"

const Marketplace = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('marketplace')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }


    return (
        <Grid container justifyContent="space-between" style={{paddingBottom: '60px'}} id="marketplace" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Grid item sm={5}>
                <Box paddingTop="30.682%" paddingLeft="2.5rem">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)">
                        <Typography variant="h2" fontSize="60px" letterSpacing="0.05em">
                            Marketplace
                        </Typography>
                        <Box marginBottom={2}>
                            <Typography variant="h3" fontSize="30px" color="black" lineHeight="1.2em" >
                                Instagram + Shopee = Sentavo Marketplace
                            </Typography>
                        </Box>
                        <Box marginTop={1} marginBottom={6} paddingRight={4}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px" lineHeight="1.5em">
                                Buy & sell anything and get paid easily.<br/><br/>
                                Anyone with a Sentavo account can sell products and services.<br/><br/>
                                Intuitive user interface using a “feed” experience for discovering items you did not know you wanted.<br/><br/>
                                Search products and services from thousands of Sentavo users, and partners' ecosystem.<br/><br/>
                                Easily pay for purchases using your existing cards, banks, and crypto via Sentavo.<br/><br/>
                                Buy and sell online or in store.<br/><br/>
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={7}>
                <Box position="relative" paddingY="3.5%" height="100%" paddingLeft="auto" textAlign="right">
                    <img src={marketplace} style={{width: "90%"}}/>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Marketplace