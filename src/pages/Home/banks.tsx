import { memo, useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";

import styles from './home.module.css'

import mastercard from "assets/images/bank_logos/mastercard.png"
import visa       from "assets/images/bank_logos/visa.png"
import instapay   from "assets/images/bank_logos/instapay.png"
import pesonet    from "assets/images/bank_logos/pesonet.png"
import bdo        from "assets/images/bank_logos/bdo.webp"
import bpi        from "assets/images/bank_logos/bpi.png"
import metrobank  from "assets/images/bank_logos/metrobank.webp"
import rcbc       from "assets/images/bank_logos/rcbc.png"
import unionbank  from "assets/images/bank_logos/unionbank.png"
import gcash      from "assets/images/bank_logos/gcash.png"
import maya       from "assets/images/bank_logos/maya.png"
import bitcoin    from "assets/images/bank_logos/bitcoin.png"

const Banks = () => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})

    const banks: string[] = [
        mastercard, visa, instapay, pesonet, bdo, bpi,
        metrobank, rcbc, unionbank, gcash, maya, bitcoin
    ]

    const [visible, setVisible] = useState(false)

    const scroll = () => {
        const element = document.getElementById('banks')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }

    return (
        <Grid container id="banks" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            {banks.map(
                bank => (
                    <Grid item container xs={2} className={styles.bank}
                        justifyContent = "center"
                        alignItems     = "center"
                        textAlign      = "center"
                    >
                        <img src={bank} className={styles.bank_logo} />
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default Banks