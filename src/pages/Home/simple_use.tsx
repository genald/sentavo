import { Box, Grid, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";

import wallet_page from "assets/images/wallet_page.jpg"
import scan_to_pay from "assets/images/scan_to_pay.jpg"
import send_money  from "assets/images/send_money.jpg"
import transaction_history  from "assets/images/transaction_history.jpg"

import styles from './home.module.css'

const SimpleUse = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('simple-use')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }

    const typography = {
        fontFamily: "Arial",
        letterSpacing: "0.06em",
        lineHeight: "1.5em",
    }

    const textTypograph = {
        ...typography,
        fontSize: "12px",
        color: "rgb(74, 74, 74)"
    }

    return <Box padding="40px 0" id="simple-use" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
        <Box marginTop="15px" marginBottom="20px">
            <Typography {...typography} variant="h2" color="rgb(151, 151, 151)" textAlign="center">
                Simple. Easy to use.
            </Typography>
        </Box>
        <Grid container spacing={1} justifyContent="center" justifyItems="center">
            <Grid item sm={3} style={{padding: "30px 20px 30px 0px"}}>
                <img src={wallet_page} width="100%"/>
                <Typography {...textTypograph} style={{margin: "10px"}}>
                    Choose a payment method - credit/debit card, bank account, e-wallet account, crypto, or over-the-counter.
                </Typography>
            </Grid>
            <Grid item sm={3} style={{padding: "30px 20px 30px 0px"}}>
                <img src={scan_to_pay} width="100%"/>
                <Typography {...textTypograph} style={{margin: "10px"}}>
                    Pay or send money by scanning a QR code, or via payment address, name, email, or mobile number.
                </Typography>
            </Grid>
            <Grid item sm={3} style={{padding: "30px 20px 30px 0px"}}>
                <img src={send_money} width="100%"/>
                <Typography {...textTypograph} style={{margin: "10px"}}>
                    Intuitive user interface that us simple and easy to use.
                </Typography>
            </Grid>
            <Grid item sm={3} style={{padding: "30px 20px 30px 0px"}}>
                <img src={transaction_history} width="100%"/>
                <Typography {...textTypograph} style={{margin: "10px"}}>
                    Easily track your expenses to manage your budget.
                </Typography>
            </Grid>
        </Grid>
    </Box>
})

export default SimpleUse