import { memo, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import send_money_phone  from "assets/images/send_money_phone.jpg";

import styles from './home.module.css'

const Payments = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('payments')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }


    return (
        <Grid container justifyContent="space-between" style={{padding: '0 60px 125px 60px'}} id="payments" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Grid item sm={6}>
                <Box position="relative" paddingY="3.5%" height="100%">
                    <img src={send_money_phone} style={{width: "70%", position: 'absolute', left: 10}}/>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box paddingTop="30.682%" paddingLeft="2.5rem">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)">
                        <Typography variant="h2" fontSize="60px" letterSpacing="0.05em">
                            Payments
                        </Typography>
                        <Box paddingRight={5} marginBottom={2}>
                            <Typography variant="h3" fontSize="30px" color="black" lineHeight="1.2em" >
                                Send and receive payments using any bank account, e-wallet, and crypto.
                            </Typography>
                        </Box>
                        <Box marginTop={1} marginBottom={6} paddingRight={7}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px" lineHeight="1.5em">
                                Sentavo allows anyone to make and receive payments with any bank account, e-wallet, or crypto.<br/><br/>
                                Sentavo allows anyone to get cash immediately through banks, pawnshops, payment centers, ATMs, or from other Sentavo users.<br/><br/>
                                Easily pay, send funds, or reload via QR code, name, email, mobile number, or payment address.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Payments