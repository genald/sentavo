import { memo, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import styles from "./home.module.css";

import cashout from "assets/images/cashout.jpg"

const Cashout = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('cashout')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }


    return (
        <Grid container justifyContent="space-between" style={{paddingBottom: '60px'}} id="cashout" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Grid item sm={5}>
                <Box paddingTop="30.682%" paddingLeft="2.5rem">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)">
                        <Typography variant="h2" fontSize="60px" letterSpacing="0.05em">
                            Cashout
                        </Typography>
                        <Box marginBottom={2}>
                            <Typography variant="h3" fontSize="30px" color="black" lineHeight="1.2em" >
                                The "Uber" of Payments - the Mobile ATM.
                            </Typography>
                        </Box>
                        <Box marginTop={1} marginBottom={6} paddingRight={4}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px" lineHeight="1.5em">
                                Sentavo ATM allows Sentavo users to ask other Sentavo users to give you cash in exchange for transfering funds.<br/><br/>
                                Never have the problem of searching for the nearest ATM to withdraw money. “Withdraw” at any time from anyone with a Sentavo app.<br/><br/>
                                Sentavo scans the area for other Sentavo users willing to exchange cash with funds transferred from Sentavo.<br/><br/>
                                Earn extra cash when you accept the request and exchange money. Earn up to 5% of the requested amount. Think of it as convenience fee to you whenever you let other Sentavo users “withdraw” from you.<br/><br/>
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={7}>
                <Box position="relative" paddingY="3.5%" height="100%" paddingLeft="auto" textAlign="right">
                    <img src={cashout} style={{width: "90%"}}/>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Cashout