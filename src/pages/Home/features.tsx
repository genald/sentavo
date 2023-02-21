import { Box, Grid, Typography } from "@mui/material"
import { memo, useEffect, useState } from "react"

import styles from "./home.module.css";

const Features = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('features')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }

    const typography = {
        fontFamily: "Arial",
        letterSpacing: "0.06em",
        lineHeight: "1.2em",
        color: "white"
    }
    const FeatureItem = ({title, body}: any) => (
        <Grid item sm={3} style={{padding: "40px 20px 20px 0"}}>
            <Typography {...typography} fontSize="inherit" variant="h2" style={{padding: "10px 0 5px"}}>{title}</Typography>
            <Typography {...typography} fontSize="inherit" color="rgb(170, 170, 170)" style={{padding: "10px 9px 10px 0"}}>{body}</Typography>
        </Grid>
    )

    return <Box bgcolor="black" padding="60px 35px" display="flex" justifyContent="center">
        <Box width={1000} id="features" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Typography fontFamily="Arial">
                <Typography {...typography} variant="h2" textAlign="center">More than payments</Typography>
                <Grid container style={{fontSize: 12}}>
                    <FeatureItem title="QR Scan to Pay" body="No need to carry cash or cards, pay by scanning ANY kind of QR code"/>
                    <FeatureItem title="Transfer Money" body="Use chat to request and send money, this also serves as your transaction's historical record"/>
                    <FeatureItem title="Send Payment" body="Pay an individual or a business using their QR code, email, mobile number, or payment address"/>
                    <FeatureItem title="Request Payment" body="Request payment by sending a link, a QR code, or an invoice"/>

                    <FeatureItem title="Pay Bills" body="Never miss a utility bill or pay late fees, automatically pay bills or send due date reminders"/>
                    <FeatureItem title="Top Up, Reload" body="Easily top up or reload toll way account, MRT/LRT account, e games, and e-wallets"/>
                    <FeatureItem title="Nearest Banks, ATM" body="Search for banks or ATM to do over the counter payments or cash withdrawal"/>
                    <FeatureItem title="Crypto" body="Buy, sell, use, and receive popular cryptocurrencies"/>

                    <FeatureItem title="Tickets" body="Generate and use single use QR tickets for transportation and events"/>
                    <FeatureItem title="Parking" body="Easily pay parking fees using your toll way account, MRT/LRT account, or via QR payment"/>
                    <FeatureItem title="Gas Stations" body="Prepaid, in store, and postpaid contactless and cashless payments for fuels and gas station services"/>
                    <FeatureItem title="Withdraw/Cashout" body="Request cash from other Sentavo users around the area"/>

                    <FeatureItem title="On-demand Services" body="Request on-demand services from other Sentavo users around the area"/>
                    <FeatureItem title="Shopping" body="Buy products and services from merchants and businesses with a Sentavo account"/>
                    <FeatureItem title="Promos" body="Get special promos and discounts from Sentavo partners"/>
                    <FeatureItem title="Works with most accounts" body="Use any of your bank accounts, e-wallets, or crypto to make and receive payments"/>

                </Grid>
            </Typography>
        </Box>
    </Box>
})

export default Features